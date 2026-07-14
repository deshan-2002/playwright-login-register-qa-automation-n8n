import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { generateUser, invalidEmails, shortPasswords } from './fixtures/test-data';

test.describe('Authentication Flow', () => {
  let loginPage;
  let registerPage;
  let dashboardPage;
  const user = generateUser();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    registerPage = new RegisterPage(page);
    dashboardPage = new DashboardPage(page);
  });

  test.describe('Registration', () => {
    test('should display the register page correctly', async ({ page }) => {
      await registerPage.goto();
      await expect(registerPage.heading).toBeVisible();
      await expect(registerPage.nameInput).toBeVisible();
      await expect(registerPage.emailInput).toBeVisible();
      await expect(registerPage.passwordInput).toBeVisible();
      await expect(registerPage.confirmPasswordInput).toBeVisible();
      await expect(registerPage.submitButton).toBeVisible();
      await expect(registerPage.signInLink).toBeVisible();
    });

    test('should show validation errors for empty fields', async ({ page }) => {
      await registerPage.goto();
      await registerPage.submit();
      await expect(registerPage.validationError).toHaveCount(4);
    });

    test('should show validation error for invalid email', async ({ page }) => {
      await registerPage.goto();
      await registerPage.fillName(user.name);
      await registerPage.fillEmail('not-an-email');
      await registerPage.fillPassword(user.password);
      await registerPage.fillConfirmPassword(user.password);
      await registerPage.submit();
      await expect(registerPage.validationError.first()).toBeVisible();
    });

    test('should show validation error for short password', async ({ page }) => {
      await registerPage.goto();
      await registerPage.fillName(user.name);
      await registerPage.fillEmail(user.email);
      await registerPage.fillPassword('12');
      await registerPage.fillConfirmPassword('12');
      await registerPage.submit();
      await expect(registerPage.validationError.first()).toBeVisible();
    });

    test('should show validation error when passwords do not match', async ({ page }) => {
      await registerPage.goto();
      await registerPage.fillName(user.name);
      await registerPage.fillEmail(user.email);
      await registerPage.fillPassword(user.password);
      await registerPage.fillConfirmPassword('DifferentPass1');
      await registerPage.submit();
      await expect(registerPage.validationError).toContainText(['Passwords do not match']);
    });

    test('should register a new user and redirect to dashboard', async ({ page }) => {
      await registerPage.goto();
      await registerPage.register(user.name, user.email, user.password);
      await expect(registerPage.successMessage).toBeVisible({ timeout: 10000 });
      await page.waitForURL('/dashboard', { timeout: 10000 });
      const userName = await dashboardPage.getUserName();
      expect(userName).toBe(user.name.split(' ')[0]);
    });

    test('should show error for duplicate email registration', async ({ page }) => {
      await registerPage.goto();
      await registerPage.register('Another User', user.email, user.password);
      await expect(page.locator('text=Email already registered')).toBeVisible({ timeout: 10000 });
    });
  });

  test.describe('Login', () => {
    test('should display the login page correctly', async ({ page }) => {
      await loginPage.goto();
      await expect(loginPage.heading).toBeVisible();
      await expect(loginPage.emailInput).toBeVisible();
      await expect(loginPage.passwordInput).toBeVisible();
      await expect(loginPage.submitButton).toBeVisible();
      await expect(loginPage.signUpLink).toBeVisible();
    });

    test('should show validation errors for empty fields', async ({ page }) => {
      await loginPage.goto();
      await loginPage.submit();
      await expect(loginPage.validationError).toHaveCount(2);
    });

    test('should show error for invalid email format', async ({ page }) => {
      await loginPage.goto();
      await loginPage.fillEmail('invalid');
      await loginPage.fillPassword(user.password);
      await loginPage.submit();
      await expect(loginPage.validationError.first()).toBeVisible();
    });

    test('should show error for wrong credentials', async ({ page }) => {
      await loginPage.goto();
      await loginPage.login('wrong@email.com', 'wrongpassword');
      await expect(loginPage.errorMessage).toBeVisible({ timeout: 10000 });
    });

    test('should login with valid credentials and redirect to dashboard', async ({ page }) => {
      await loginPage.goto();
      await loginPage.login(user.email, user.password);
      await page.waitForURL('/dashboard', { timeout: 10000 });
      await expect(dashboardPage.welcomeHeading).toBeVisible();
      const userName = await dashboardPage.getUserName();
      expect(userName).toBe(user.name.split(' ')[0]);
    });
  });

  test.describe('Dashboard Access Control', () => {
    test('should redirect unauthenticated users to login', async ({ page }) => {
      await page.goto('/dashboard');
      await page.waitForURL('/login');
      await expect(loginPage.heading).toBeVisible();
    });

    test('should display dashboard sections after login', async ({ page }) => {
      await loginPage.goto();
      await loginPage.login(user.email, user.password);
      await page.waitForURL('/dashboard', { timeout: 10000 });
      await expect(dashboardPage.welcomeHeading).toBeVisible();
      await expect(page.locator('text=Total Revenue')).toBeVisible();
      await expect(page.locator('text=Active Users')).toBeVisible();
      await expect(page.locator('text=Weekly Revenue')).toBeVisible();
      await expect(page.locator('text=Recent Transactions')).toBeVisible();
    });
  });

  test.describe('Logout', () => {
    test('should logout successfully and redirect to login', async ({ page }) => {
      await loginPage.goto();
      await loginPage.login(user.email, user.password);
      await page.waitForURL('/dashboard', { timeout: 10000 });
      await dashboardPage.logout();
      await expect(loginPage.heading).toBeVisible();
    });

    test('should not allow access to dashboard after logout', async ({ page }) => {
      await loginPage.goto();
      await loginPage.login(user.email, user.password);
      await page.waitForURL('/dashboard', { timeout: 10000 });
      await dashboardPage.logout();
      await page.goto('/dashboard');
      await page.waitForURL('/login');
    });
  });

  test.describe('Navigation', () => {
    test('should navigate from login to register and back', async ({ page }) => {
      await loginPage.goto();
      await loginPage.signUpLink.click();
      await expect(registerPage.heading).toBeVisible();
      await registerPage.signInLink.click();
      await expect(loginPage.heading).toBeVisible();
    });
  });
});
