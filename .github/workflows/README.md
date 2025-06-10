# GitHub Workflows

This directory contains GitHub Actions workflow configurations that automate various processes for the repository.

## Workflows

### `ci.yml`

Continuous Integration workflow that runs on push to main and pull requests.

**Triggers:**

- Push to main branch
- Pull requests to main branch

**Jobs:**

- **build**: Builds and tests the application

**Steps:**

1. Checkout repository
2. Set up Node.js environment
3. Install dependencies with npm ci
4. Run linting checks
5. Build the application

**Configuration:**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Lint
        run: npm run lint
      - name: Build
        run: npm run build
```

## Guidelines for Workflows

1. **Naming**: Use clear, descriptive names for workflows and jobs
2. **Comments**: Add comments to explain complex steps
3. **Caching**: Use caching to speed up workflows
4. **Secrets**: Use GitHub secrets for sensitive information
5. **Notifications**: Configure appropriate notifications for workflow results

## Planned Workflows

The following workflows are planned to be added:

### `cd.yml`

Continuous Deployment workflow.

**Planned Triggers:**

- Push to main branch (deploy to staging)
- Release published (deploy to production)

**Planned Jobs:**

- **deploy-staging**: Deploy to staging environment
- **deploy-production**: Deploy to production environment

### `dependency-review.yml`

Dependency review workflow.

**Planned Triggers:**

- Pull requests

**Planned Jobs:**

- **analyze**: Analyze dependencies for vulnerabilities and license compliance

### `codeql-analysis.yml`

Code quality and security analysis.

**Planned Triggers:**

- Push to main branch
- Pull requests to main branch
- Scheduled runs

**Planned Jobs:**

- **analyze**: Run CodeQL analysis for security vulnerabilities

### `update-readmes.yml`

Workflow that automatically updates README.md files when changes are made to the codebase.

**Triggers:**

- Push to main branch
- Ignores changes to README.md files and the workflow file itself

**Jobs:**

- **update-readmes**: Updates README.md files with information about changed files

**Steps:**

1. Checkout repository with full history
2. Set up Node.js environment
3. Install dependencies for both the project and the script
4. Run the update-readmes.js script
5. Commit and push changes to README.md files

**Configuration:**

```yaml
name: Update README Files

on:
  push:
    branches: [main]
    paths-ignore:
      - '**/README.md'
      - '.github/workflows/update-readmes.yml'

jobs:
  update-readmes:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Fetch all history for file changes

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'

      - name: Install dependencies
        run: |
          npm ci
          cd .github/scripts
          npm install

      - name: Update README files
        run: node --experimental-modules .github/scripts/update-readmes.js

      - name: Commit changes
        run: |
          git config --local user.email "github-actions[bot]@users.noreply.github.com"
          git config --local user.name "github-actions[bot]"
          git add "**/README.md"
          git diff --staged --quiet || git commit -m "docs: update README files [skip ci]"
          git push
```


## Recent Changes (2025-06-10)

### Added

- `.github/workflows/ci.yml`
- `.github/workflows/update-readmes.yml`

