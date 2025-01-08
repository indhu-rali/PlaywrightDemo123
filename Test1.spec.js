import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://dev-ics.imedx.com.au/");
  await page.getByLabel("Username").click();
  await page.getByLabel("Username").fill("Sai");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Sairam@123");
  await page.getByRole("button", { name: "Log In" }).click();
  await page.locator(".slider").first().click();
  await page
    .locator("li")
    .filter({ hasText: "Dark Mode" })
    .locator("label span")
    .click();
  await page.locator(".slider").first().click();
  await page.getByRole("link", { name: "Settings" }).click();
  await page.getByRole("button", { name: "Add Category +" }).click();
  await page.getByPlaceholder("Enter Category", { exact: true }).click();
  await page.getByPlaceholder("Enter Category", { exact: true }).fill("DSFSd");
  await page.getByPlaceholder("Enter Category Code").click();
  await page.getByPlaceholder("Enter Category Code").fill("FGSDf");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await page.getByRole("button", { name: "Create Audit Rule +" }).click();
  await page
    .getByLabel("Category")
    .selectOption("Look for Missing Prosthesis Charge");
  await page.getByPlaceholder("Enter Short Description").click();
  await page.getByPlaceholder("Enter Value of Rule").click();
  await page.getByPlaceholder("Enter New DRG").click();
  await page.getByPlaceholder("Enter Long Description").click();
  await page.getByPlaceholder("Enter User Message").click();
  await page.getByPlaceholder("Enter Rule 1").click();
  await page.getByPlaceholder("Enter Rule 2").click();
  await page.getByPlaceholder("Enter DRG Version").click();
  await page.getByPlaceholder("Enter Priority Value").click();
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.getByText("HelpContact: ics-support@").click();
  await page
    .locator("li")
    .filter({ hasText: "Dark Mode" })
    .locator("label span")
    .click();
  await page.getByText("sai@gmail.com").first().click();
});
