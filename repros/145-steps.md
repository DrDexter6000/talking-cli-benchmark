# Reproduction Steps: Search Returns 500 Error with Quotes

## Steps to Reproduce

1. Navigate to the search feature in the application
2. Enter a search query containing quote marks (e.g., `project "alpha"`)
3. Submit the search

## Expected Behavior

The search should return matching results for the query, including results that match the quoted term.

## Actual Behavior

The application returns a 500 Internal Server Error. The search does not complete and no results are displayed.

## Environment

- **Browser:** Firefox 121
- **Operating System:** Windows 11
- **User:** DrDexter6000
- **Issue Date:** 2026-05-05
- **Notes:** This issue started after the last update. Normal searches without quotes work fine. Other special characters may also trigger the error, but quotes are the most consistent trigger.
