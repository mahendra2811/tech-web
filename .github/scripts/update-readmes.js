import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get the list of changed files in the last commit
function getChangedFiles() {
  try {
    // Get the files changed in the last few commits
    // First, try to get the last few commits (up to 5)
    console.log('Getting recent commits...');
    let commitRange;

    try {
      // Try to get the last 5 commits
      const lastCommits = execSync(
        'git rev-parse HEAD~5..HEAD 2>/dev/null || git rev-list --max-count=5 HEAD'
      )
        .toString()
        .trim();
      const firstCommit = lastCommits.split('\n').pop();
      commitRange = `${firstCommit}..HEAD`;
      console.log(`Using commit range: ${commitRange}`);
    } catch (error) {
      // If that fails (e.g., not enough commits), just use the last commit
      console.log(
        'Could not get multiple commits, falling back to last commit only:',
        error.message
      );
      commitRange = 'HEAD';
    }

    // Get changed files using the commit range
    console.log(`Executing git command to get changed files in range ${commitRange}...`);
    const gitCommand =
      commitRange === 'HEAD'
        ? 'git diff-tree --no-commit-id --name-status -r HEAD'
        : `git diff --name-status ${commitRange}`;

    console.log(`Running command: ${gitCommand}`);
    const output = execSync(gitCommand).toString();
    console.log('Git command output:', output);

    // Parse the output to get file paths and status (A: added, M: modified, D: deleted)
    const changedFiles = output
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line) => {
        const [status, filePath] = line.split(/\s+/);
        return { status, filePath };
      });

    console.log('All changed files before filtering:', JSON.stringify(changedFiles, null, 2));

    // Filter out README.md files
    const filteredFiles = changedFiles.filter(({ filePath }) => !filePath.includes('README.md'));
    console.log(
      'Changed files after filtering out READMEs:',
      JSON.stringify(filteredFiles, null, 2)
    );

    return filteredFiles;
  } catch (error) {
    console.error('Error getting changed files:', error);
    console.error(error.stack);
    return [];
  }
}

// Group changed files by directory
function groupFilesByDirectory(files) {
  const directoryMap = {};

  files.forEach(({ status, filePath }) => {
    const directory = path.dirname(filePath);

    if (!directoryMap[directory]) {
      directoryMap[directory] = [];
    }

    directoryMap[directory].push({ status, filePath });
  });

  return directoryMap;
}

// Find the closest README.md file for a directory
function findReadmeFile(directory, maxDepth = 5) {
  // Add a maximum depth to prevent infinite recursion
  if (maxDepth <= 0) {
    console.log(`Reached maximum recursion depth for directory: ${directory}`);
    return null;
  }

  // Check if README.md exists in the current directory
  const readmePath = path.join(directory, 'README.md');
  if (fs.existsSync(readmePath)) {
    return readmePath;
  }

  // If not, check parent directories until we find one or reach the root
  const parentDir = path.dirname(directory);
  if (parentDir !== directory) {
    // Stop if we've reached the root
    return findReadmeFile(parentDir, maxDepth - 1);
  }

  return null; // No README.md found
}

// Update a README.md file with information about changed files
function updateReadmeFile(readmePath, changedFiles) {
  try {
    // Read the current content of the README.md file
    let content = fs.readFileSync(readmePath, 'utf8');

    // Create a section for recent changes
    const changeDate = new Date().toISOString().split('T')[0];
    let changesSection = `\n\n## Recent Changes (${changeDate})\n\n`;

    // Group by status
    const added = changedFiles.filter((file) => file.status === 'A');
    const modified = changedFiles.filter((file) => file.status === 'M');
    const deleted = changedFiles.filter((file) => file.status === 'D');

    // Add information about added files
    if (added.length > 0) {
      changesSection += '### Added\n\n';
      added.forEach((file) => {
        changesSection += `- \`${file.filePath}\`\n`;
      });
      changesSection += '\n';
    }

    // Add information about modified files
    if (modified.length > 0) {
      changesSection += '### Modified\n\n';
      modified.forEach((file) => {
        changesSection += `- \`${file.filePath}\`\n`;
      });
      changesSection += '\n';
    }

    // Add information about deleted files
    if (deleted.length > 0) {
      changesSection += '### Deleted\n\n';
      deleted.forEach((file) => {
        changesSection += `- \`${file.filePath}\`\n`;
      });
      changesSection += '\n';
    }

    // Check if there's already a Recent Changes section
    const recentChangesRegex = /\n## Recent Changes \(\d{4}-\d{2}-\d{2}\)\n/;
    if (recentChangesRegex.test(content)) {
      console.log(`Found existing Recent Changes section in ${readmePath}`);

      // Use a more precise regex to replace the existing Recent Changes section
      // This pattern looks for the section header and then captures everything until the next section header or end of file
      // The non-greedy quantifier *? ensures we don't capture too much
      try {
        const oldContent = content;
        content = content.replace(
          /(\n## Recent Changes \(\d{4}-\d{2}-\d{2}\))(\n[\s\S]*?)(?=\n## |\n# |$)/,
          (match, header, oldChanges) => {
            console.log(`Replacing section: ${header}`);
            console.log(`Previous changes section length: ${oldChanges.length} characters`);
            return changesSection;
          }
        );

        // If the content didn't change, the regex might not have matched correctly
        if (content === oldContent) {
          console.log(`Warning: Failed to replace Recent Changes section in ${readmePath}`);
          // Fallback: append the new changes section
          content += changesSection;
        }
      } catch (error) {
        console.error(`Error replacing Recent Changes section: ${error.message}`);
        // Fallback: append the new changes section
        content += changesSection;
      }
    } else {
      // Add the Recent Changes section at the end
      console.log(`No existing Recent Changes section found in ${readmePath}, adding new one`);
      content += changesSection;
    }

    // Write the updated content back to the README.md file
    fs.writeFileSync(readmePath, content);

    console.log(`Updated ${readmePath}`);
  } catch (error) {
    console.error(`Error updating ${readmePath}:`, error);
  }
}

// Main function
function main() {
  console.log('Starting README update process...');
  console.log('Current working directory:', process.cwd());

  // Check if README files are ignored by git
  try {
    console.log('Checking git status of README files...');
    const gitStatusOutput = execSync(
      'git check-ignore -v "**/README.md" || echo "Not ignored"'
    ).toString();
    console.log('Git ignore status:', gitStatusOutput);
  } catch (error) {
    console.log('Error checking git ignore status:', error.message);
  }

  // Get the list of changed files
  const changedFiles = getChangedFiles();

  if (changedFiles.length === 0) {
    console.log('No files changed');
    return;
  }

  // Group changed files by directory
  const directoryMap = groupFilesByDirectory(changedFiles);
  console.log('Directories with changes:', Object.keys(directoryMap));

  // Update README.md files for each directory
  Object.entries(directoryMap).forEach(([directory, files]) => {
    console.log(`Processing directory: ${directory}`);
    const readmePath = findReadmeFile(directory, 5); // Maximum 5 levels up

    if (readmePath) {
      console.log(`Found README at: ${readmePath}`);
      updateReadmeFile(readmePath, files);
    } else {
      console.log(`No README.md found for ${directory}`);
    }
  });

  console.log('README update process completed');
}

// Run the main function
main();
