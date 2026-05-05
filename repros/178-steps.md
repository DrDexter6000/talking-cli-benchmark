# Reproduction Steps for Issue #178

## Steps to Reproduce

1. Navigate to the search feature in the application
2. Enter a search query containing quote marks (e.g., `project "alpha"`)
3. Submit the search

## Expected Behavior

The search should return matching results or a "no results found" message. The application should handle quoted strings as valid search input.

## Actual Behavior

The application returns a 500 Internal Server Error. The user is unable to search with quote marks in the query.

## Environment

- Browser: Firefox 121
- Operating System: Windows 11
- Additional Notes: Normal searches without quotes work correctly. Other special characters may also trigger this issue, but quotes are the most consistent trigger. This issue started after a recent update.
- User: DrDexter6000
