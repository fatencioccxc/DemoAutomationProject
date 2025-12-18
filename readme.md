# Demo Automation Project

This project is an end-to-end (E2E) test automation framework built with [Playwright](https://playwright.dev/). It is designed to test web applications by simulating user interactions and validating expected behaviors.

## Project Structure

The project is organized as follows:

```
.
├── .env.example                # Example environment variables file
├── .github/workflows           # GitHub Actions workflows for CI/CD
├── .vscode                     # VS Code settings
├── playwright-report           # Playwright test reports
├── src                         # Source code
│   ├── constant                # Application constants
│   ├── pages                   # Page Object Model (POM) classes
│   ├── test-results            # Test results and screenshots
│   ├── tests                   # Test specifications
│   └── utils                   # Utility functions
├── package.json                # Project dependencies and scripts
├── playwright.config.ts        # Playwright configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Playwright browsers (installed automatically)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd DemoAutomationProject
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with the appropriate values for `URL`, `ACCOUNT`, and `PASSWORD`.

4. Install Playwright browsers:

   ```bash
   npx playwright install --with-deps
   ```

## Running Tests

To execute the tests, use the following command:

```bash
npx playwright test
```

### Running Specific Tests

To run a specific test file:

```bash
npx playwright test src/tests/Login.spec.ts
```

To run tests with a specific tag:

```bash
npx playwright test --grep @TCLG001
```

## Test Reports

After running tests, an HTML report is generated in the `playwright-report` directory. To view the report:

```bash
npx playwright show-report
```

## Continuous Integration

The project uses GitHub Actions for CI/CD. The workflow is defined in `.github/workflows/playwright.yml`. It runs tests on every push or pull request to the `main` or `master` branch.

## License

This project is licensed under the [ISC License](LICENSE).

## Contact

For questions or feedback, please contact the project maintainer.