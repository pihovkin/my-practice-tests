# Playwright Practice Tests

Personal QA automation practice project built with **Playwright + TypeScript**.

![CI](https://github.com/pihovkin/my-practice-tests/actions/workflows/playwright.yml/badge.svg)

## Stack

- [Playwright](https://playwright.dev/) — test framework
- TypeScript
- Node.js v24+
- GitHub Actions — CI/CD

## Test Coverage

### UI Tests (`the-internet.herokuapp.com`)

| File | What's tested |
|---|---|
| `login.spec.ts` | Login, wrong credentials, logout, checkboxes, dropdown |
| `drag-and-drop.spec.ts` | Drag and drop interaction |
| `file-upload.spec.ts` | File upload via input |
| `javascript-alerts.spec.ts` | JS Alert, Confirm (accept/dismiss), Prompt |
| `hovers.spec.ts` | Hover on elements, loop through figures |
| `dynamic-loading.spec.ts` | Waiting for hidden/dynamic elements (Example 1 & 2) |
| `tables.spec.ts` | Row count, text search, filter by cell value |

### API Tests (`jsonplaceholder.typicode.com`)

| File | What's tested |
|---|---|
| `api.spec.ts` | GET, POST, PUT, PATCH, DELETE, query params, custom headers |

## Run Tests

```bash
# Install dependencies
npm ci

# Install browsers
npx playwright install

# Run all tests
npx playwright test

# Run specific file
npx playwright test login.spec.ts

# Run in headed mode (see the browser)
npx playwright test --headed

# Open HTML report
npx playwright show-report
```

## CI/CD

Tests run automatically on every push and pull request to `main` via GitHub Actions.
HTML report is uploaded as an artifact and kept for 30 days.

## Project Structure

```
my-practice-tests/
├── tests/
│   ├── login.spec.ts
│   ├── api.spec.ts
│   ├── drag-and-drop.spec.ts
│   ├── file-upload.spec.ts
│   ├── javascript-alerts.spec.ts
│   ├── hovers.spec.ts
│   ├── dynamic-loading.spec.ts
│   └── tables.spec.ts
├── playwright.config.ts
└── .github/
    └── workflows/
        └── playwright.yml
```
