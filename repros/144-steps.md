# Reproduction Steps: CSV Import Crash with Special Characters

## Steps to Reproduce

1. Prepare a CSV file containing a mix of regular text and accented characters (e.g., café, naïve, résumé, or other special characters)
2. Navigate to the CSV import feature in the application
3. Select the prepared CSV file for import
4. Initiate the import process

## Expected Behavior

The CSV file should import successfully, with all data (including accented characters) being properly processed and stored in the application.

## Actual Behavior

The application crashes immediately after starting the import. The user sees a white screen followed by an error page. The import fails to complete.

## Environment

- **Browser:** Chrome 120
- **Operating System:** macOS Sonoma
- **User:** DrDexter6000
- **Issue Date:** 2026-05-05
