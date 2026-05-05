# Reproduction Steps for Issue #144

## Issue Summary
App crashes on CSV import with special characters

## Steps to Reproduce

1. Create a CSV file containing a mix of regular text and accented characters (e.g., café, naïve, résumé)
2. Open the application in Chrome 120
3. Navigate to the CSV import feature
4. Select and upload the CSV file with special characters

## Expected Behavior
The CSV file imports successfully and the data is processed without errors.

## Actual Behavior
The application crashes. The import starts but then the screen goes white and the user is redirected to an error page.

## Environment

- **Browser:** Chrome 120
- **OS:** macOS Sonoma
- **File type:** CSV with accented/special characters
