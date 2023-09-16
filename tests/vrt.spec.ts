import { test, expect } from '@playwright/test';
import { webkit } from 'playwright'

test('VRT (Visual Regression Test) sample', async ({ page: Page }) => {
  const browser = await webkit.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('https://www.yahoo.co.jp/')

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot()
});