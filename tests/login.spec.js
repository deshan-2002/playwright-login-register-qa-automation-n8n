import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { existingUser } from './fixtures/test-data';

test.describe('Login Tests', () => {
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
  });

  test('should display the login page correctly', async ({ page }) => {
    await loginPage.goto();
    await expect(loginPage.heading).toBeVisible();
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
    await expect(loginPage.signUpLink).toBeVisible();
    await expect(page.getByText('Welcome Back')).toBeVisible();
  });

  test('should show validation errors when submitting empty form', async ({ page }) => {
    await loginPage.goto();
    await loginPage.submit();
    await expect(loginPage.validationError).toHaveCount(2);
  });

  test('should show validation error for invalid email format', async ({ page }) => {
    await loginPage.goto();
    await loginPage.fillEmail('not-an-email');
    await loginPage.fillPassword(existingUser.password);
    await loginPage.submit();
    await expect(loginPage.validationError.first()).toBeVisible();
  });

  test('should show validation error for empty password', async ({ page }) => {
    await loginPage.goto();
    await loginPage.fillEmail(existingUser.email);
    await loginPage.submit();
    await expect(loginPage.validationError).toHaveCount(1);
  });

  test('should show error for incorrect email', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login('wrong@email.com', existingUser.password);
    await expect(loginPage.errorMessage).toBeVisible({ timeout: 10000 });
  });

  test('should show error for incorrect password', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login(existingUser.email, 'WrongPassword1');
    await expect(loginPage.errorMessage).toBeVisible({ timeout: 10000 });
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login(existingUser.email, existingUser.password);
    await expect(dashboardPage.welcomeHeading).toBeVisible({ timeout: 15000 });
  });

  test('should redirect to login when accessing dashboard without auth', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForURL('/login');
    await expect(loginPage.heading).toBeVisible();
  });
});
