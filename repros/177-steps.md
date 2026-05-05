# Reproduction Steps for Issue #177

## Steps to Reproduce

1. Prepare a CSV file containing accented characters (e.g., café, naïve, résumé, über)
2. Navigate to the CSV import feature in the application
3. Select and upload the CSV file containing special/accented characters
4. Initiate the import process

## Expected Behavior

The CSV import should complete successfully, processing all records including those with accented characters. The application should display a success message or import summary when complete.

## Actual Behavior

The application crashes during import. The screen turns white and displays an error page. The import fails and no data is imported.

## Environment

- Browser: Chrome 120
- Operating System: macOS Sonoma
- User: DrDexter6000
