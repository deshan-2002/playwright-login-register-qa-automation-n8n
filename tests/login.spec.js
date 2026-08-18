import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { generateUser, wrongPassword } from './fixtures/test-data';

const API = process.env.API_URL || 'http://localhost:5000/api/auth';

test.describe('Login Tests', () => {
  let loginPage;
  let dashboardPage;
  let user;

  test.beforeAll(async ({ request }) => {
    user = generateUser();

    const response = await request.post(`${API}/register`, { data: user });
    const responseBody = await response.text();

    expect(response.status(), `Failed to register test user.\nResponse: ${responseBody}`).toBe(201);
  });

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

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login(user.email, user.password);

    await expect(page).toHaveURL(/\/dashboard/);
    await expect(dashboardPage.welcomeHeading).toBeVisible();
    await expect(dashboardPage.accountEmail).toContainText(user.email);
  });

  test('should show error for valid email with wrong password', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login(user.email, wrongPassword);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
    await expect(dashboardPage.welcomeHeading).not.toBeVisible();
  });

  test('should show error for wrong email with valid password', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login(`wrong_${user.email}`, user.password);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
    await expect(dashboardPage.welcomeHeading).not.toBeVisible();
  });

  test('should show error for wrong email and wrong password', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login('wronguser@example.com', wrongPassword);

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
    await expect(dashboardPage.welcomeHeading).not.toBeVisible();
  });

  test('should show validation error for empty email', async ({ page }) => {
    await loginPage.goto();
    await loginPage.fillPassword(user.password);
    await loginPage.submit();

    await expect(loginPage.emailError).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
  });

  test('should show validation error for empty password', async ({ page }) => {
    await loginPage.goto();
    await loginPage.fillEmail(user.email);
    await loginPage.submit();

    await expect(loginPage.passwordError).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
  });

  test('should show validation errors when submitting empty form', async ({ page }) => {
    await loginPage.goto();
    await loginPage.submit();

    await expect(loginPage.emailError).toBeVisible();
    await expect(loginPage.passwordError).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
  });

  test('should show validation error for invalid email format', async ({ page }) => {
    await loginPage.goto();
    await loginPage.fillEmail('not-an-email');
    await loginPage.fillPassword(user.password);
    await loginPage.submit();

    await expect(loginPage.invalidEmailError).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
    await expect(dashboardPage.welcomeHeading).not.toBeVisible();
  });

  test('should redirect to login when accessing dashboard without auth', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForURL('/login');
    await expect(loginPage.heading).toBeVisible();
  });
});