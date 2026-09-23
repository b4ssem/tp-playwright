// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Should visit one news on university\'s website', async ({ page }) => {
  await page.goto('https://www.cyu.fr/');
  await page.locator('.actusAutres__item a').first().click();
  await expect(page).toHaveURL(/actualites/);
});

test('Should search for Algeria on Wikipedia and make sure the page is displayed', async ({ page }) => {
  await page.goto('https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal');
  await page.getByRole('searchbox', { name: 'Rechercher sur Wikipédia' }).fill('Algérie');
  await page.getByRole('searchbox', { name: 'Rechercher sur Wikipédia' }).press('Enter');
  await expect(page).toHaveURL(/Alg%C3%A9rie/);
});


test('Should submit the form and make sure it has been submitted', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.locator('#lastname').fill('Meghiche');
  await page.locator('#firstname').fill('Bassem');
  await page.locator('#ue1').fill('16');
  await page.locator('#ue2').fill('19');
  await page.locator('#ue3').fill('12');
  await page.locator('#ue4').fill('14');
  await page.locator('#ue5').fill('18.5');
  await page.locator('#parcours').selectOption('Parcours développement web et dispositifs interactifs');
  await page.locator('#portfolio').fill('https://b4ssem.com/');
  await page.locator('button').filter({ hasText: 'Envoyer' }).click();
  await expect(page.locator('section').nth(0)).toBeVisible();
});