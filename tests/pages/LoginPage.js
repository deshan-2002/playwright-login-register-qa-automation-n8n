export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.getByRole('button', { name: 'Sign In' });
    this.errorMessage = page.getByText('Invalid email or password');
    this.emailError = page.getByText('Email is required');
    this.passwordError = page.getByText('Password is required');
    this.invalidEmailError = page.getByText('Invalid email address');
    this.validationError = page.locator('.text-red-500.text-xs');
    this.signUpLink = page.getByRole('link', { name: 'Sign up' });
    this.heading = page.getByRole('heading', { name: 'Sign In' });
  }

  async goto() {
    await this.page.goto('/login');
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }

  async login(email, password) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.submit();
  }
}
