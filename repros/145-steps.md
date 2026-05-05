# Reproduction Steps for Issue #145

## Issue Summary
Search returns 500 error with certain queries

## Steps to Reproduce

1. Open the application in Firefox 121 on Windows 11
2. Navigate to the search functionality
3. Enter a search query containing quote marks (e.g., `project "alpha"`)
4. Submit the search

## Expected Behavior
The search returns results matching the query, including quoted terms if applicable.

## Actual Behavior
The search returns a 500 Internal Server Error. The issue started after a recent update.

## Environment

- **Browser:** Firefox 121
- **OS:** Windows 11
- **Trigger:** Search queries containing quote marks ("), also reported with other special characters
