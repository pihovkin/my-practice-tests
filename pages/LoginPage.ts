import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }
  async goto() {
    await this.page.goto('/login');
  }
  async logout() {
    await this.page.click('a[href="/logout"]');
    await this.page.waitForURL('/login');
  }
}
