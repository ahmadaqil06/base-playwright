# OrangeHRM Playwright Project (JavaScript)

## Overview
This is a **Playwright automation project** for the OrangeHRM demo site:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

The project uses **best practice** approaches with **fixtures, CSV-driven tests, and Allure report**. It’s a good starting point for QA automation.

---

## 📂 Project Structure
- **tests/e2e/login.spec.js** : Login tests (valid and invalid, CSV-driven)
- **tests/e2e/dashboard.spec.js** : Dashboard tests after login using fixture
- **tests/fixtures/auth.fixture.js** : Reusable `authenticatedPage` fixture
- **helpers/env.js** : Environment config (URL, username, password)
- **data/users.csv** : Example login users
- **playwright.config.js** : Playwright config with Allure reporter
- **reports/allure-results/** : Allure report output

---

## ✅ Test Coverage (Scope)

This project covers **critical flows** for QA automation:

1. **Login**
   - Valid login
   - Invalid login
   - Multiple users using CSV

2. **Dashboard**
   - Dashboard page loads after login
   - Key elements are visible

3. **Best Practice**
   - Reusable fixtures for login
   - Data-driven test approach (CSV)
   - Stable and reliable tests
   - Allure report with screenshots, video, and trace

4. **Future Scope**
   - Employee CRUD (Create, Read, Update, Delete)
   - API testing / mock API
   - CI/CD integration with GitHub Actions

---

## ⚡ How to Run Tests

1. Install dependencies
```bash
npm install
npx playwright install
