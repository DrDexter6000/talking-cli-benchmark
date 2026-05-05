# Reproduction Steps for Issue #145

## Search returns 500 error with certain queries

## Steps to Reproduce

1. Open the application in Firefox 121 on Windows 11
2. Locate the search functionality
3. Enter a search query containing quote marks (e.g., `project "alpha"`)
4. Submit the search

## Expected Behavior

The search should return matching results, properly handling the quote characters in the query.

## Actual Behavior

The application returns a 500 Internal Server Error. The user is presented with an error page instead of search results.

## Environment

- **Browser:** Firefox 121
- **OS:** Windows 11
- **User:** DrDexter6000
- **Note:** This issue started occurring after the last update. Normal searches without quote marks work correctly.
