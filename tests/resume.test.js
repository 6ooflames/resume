const { test, expect } = require('@playwright/test');

test('verify resume content updates', async ({ page }) => {
  await page.goto('http://localhost:8000');

  // Verify Summary
  await expect(page.locator('section#summary')).toContainText('Sovereign Systems Synthesis');
  await expect(page.locator('section#summary')).toContainText('ELENA Framework');
  await expect(page.locator('section#summary')).toContainText('AMD ROCm');

  // Verify Analytical Profile
  await expect(page.locator('section#profile')).toContainText('Sovereign Agent Orchestration');
  await expect(page.locator('section#profile')).toContainText('ELENA Framework');
  await expect(page.locator('section#profile')).toContainText('Local-First AI Systems');
  await expect(page.locator('section#profile')).toContainText('Surgical AI & Weight Surgery');

  // Verify Technical Projects
  await expect(page.locator('section#projects')).toContainText('ELENA Sovereign Agent Framework');
  await expect(page.locator('section#projects')).toContainText('The Infinity Fallacy: Analytical Research');
  await expect(page.locator('section#projects')).toContainText('AMD ROCm Hardened Node');

  // Verify Skills
  await expect(page.locator('section#skills')).toContainText('ELENA Framework');
  await expect(page.locator('section#skills')).toContainText('AMD ROCm');
  await expect(page.locator('section#skills')).toContainText('Qwen 3.5');
  await expect(page.locator('section#skills')).toContainText('Kernel Hardening');
});
