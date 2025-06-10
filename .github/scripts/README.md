# GitHub Scripts

This directory contains scripts used by GitHub Actions workflows.

## Scripts

### `update-readmes.js`

This script automatically updates README.md files based on changes made to files in the repository.

**Purpose:**

- Keep documentation in sync with code changes
- Provide a history of changes in each directory
- Reduce manual documentation effort

**How it works:**

1. Gets the list of files changed in the most recent commit
2. Groups the changed files by directory
3. For each directory with changes, finds the closest README.md file
4. Updates the README.md file with information about the changes:
   - Adds a "Recent Changes" section with the current date
   - Lists added, modified, and deleted files
   - If a "Recent Changes" section already exists, it replaces it

**Usage:**
This script is automatically run by the GitHub Action defined in `.github/workflows/update-readmes.yml` whenever changes are pushed to the main branch.

You can also run it manually:

```bash
cd .github/scripts
node --experimental-modules update-readmes.js
```

**Configuration:**
The script is configured as an ES module in the `package.json` file:

```json
{
  "name": "readme-updater",
  "version": "1.0.0",
  "description": "Script to update README files based on changed files",
  "main": "update-readmes.js",
  "type": "module",
  "private": true
}
```

## Implementation Details

The script uses the following Node.js modules:

- `fs` - For file system operations
- `path` - For path manipulation
- `child_process` - For executing Git commands

Key functions:

- `getChangedFiles()` - Gets the list of files changed in the last commit
- `groupFilesByDirectory()` - Groups changed files by directory
- `findReadmeFile()` - Finds the closest README.md file for a directory
- `updateReadmeFile()` - Updates a README.md file with information about changed files

## Maintenance

When modifying this script, consider:

- Ensuring it works with different Git workflows
- Handling edge cases (e.g., no README.md file, no changed files)
- Maintaining the format of the "Recent Changes" section






















## Recent Changes (2025-06-10)

### Added

- `.github/scripts/package.json`
- `.github/scripts/update-readmes.js`

