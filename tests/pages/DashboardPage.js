export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.welcomeHeading = page.locator('h1:has-text("Welcome back")');
    this.userAvatar = page.locator('button:has(.bg-gradient-to-br.from-indigo-500.to-purple-500)').first();
    this.statsCards = page.locator('.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 > div');
    this.revenueChart = page.locator('text=Weekly Revenue');
    this.transactionsTable = page.locator('text=Recent Transactions');
    this.accountCard = page.locator('text=Account Information');
    this.logoutButton = page.locator('button:has-text("Logout")');
    this.sidebarDashboard = page.locator('a:has-text("Dashboard")');
  }

  async goto() {
    await this.page.goto('/dashboard');
    await this.page.waitForLoadState('networkidle');
  }

  async getUserName() {
    const text = await this.welcomeHeading.textContent();
    return text?.replace('Welcome back, ', '').replace('!', '').trim();
  }

  async logout() {
    await this.logoutButton.click();
    await this.page.waitForURL('/login');
  }
}
