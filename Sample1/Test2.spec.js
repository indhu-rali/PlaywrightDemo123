import { test, expect } from "@playwright/test";

test("Feedback Form Submission", async ({ page }) => {
  // Step 1: Navigate to the website and log in
  await page.goto("https://dev-ics.imedx.com.au/");
  await page.getByLabel("Username").fill("Sai");
  await page.getByLabel("Password").fill("Sairam@123");
  await page.getByRole("button", { name: "Log In" }).click();

  await page.locator(".landingpage-arrow-down > span > .bi").first().click();

  await page
    .getByRole("link", { name: "settings Audit Rule Settings" })
    .click();
  // Step 2: Navigate to Feedback page
  await page.getByRole("link", { name: "feedback Feedback" }).click();

  // Step 3: Fill out the feedback form
  await page.getByPlaceholder("Enter your email").fill("abc123@gmail.com");
  await page.getByRole("button", { name: "Next" }).click();

  // Step 4: Provide Feedback Type and Details
  await page.getByLabel("Feedback Type").selectOption("bug");
  await page
    .getByPlaceholder("Describe your feedback")
    .fill("health is wealth");
  await page.getByText("★").nth(4).click(); // Set rating
  await page.getByRole("button", { name: "Next" }).click();

  // Step 5: Provide Feature Details
  await page.getByPlaceholder("Enter feature title").fill("abcaa");
  await page
    .getByPlaceholder("Describe the enhancement")
    .fill("health is wealth");
  await page.getByLabel("Importance / Priority").selectOption("high");
  await page.getByPlaceholder("Describe the business impact").fill("use case1");
  await page.getByRole("button", { name: "Next" }).click();

  // Step 6: Provide Bug Details
  await page.getByPlaceholder("Enter bug title").fill("abc");
  await page.getByPlaceholder("Describe the bug").fill("bug issues identified");
  await page.getByPlaceholder("What did you expect?").fill("ntg");
  await page.getByPlaceholder("What actually happened?").fill("ntg");
  await page.getByLabel("Severity / Impact Level").selectOption("minor");
  await page.getByRole("button", { name: "Next" }).click();

  // Step 7: Consent and Submit
  await page.getByLabel("Consent for Follow-Up").check();
  await page.getByLabel("Consent to Terms").check();
  await page.getByLabel("Submit Anonymously").check();
  await page.getByRole("button", { name: "Submit" }).click();
});
