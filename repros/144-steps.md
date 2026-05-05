# Reproduction Steps for Issue #144

## App crashes on CSV import with special characters

## Steps to Reproduce

1. Prepare a CSV file containing special characters or accented characters
2. Open the application in Chrome 120
3. Navigate to the CSV import feature
4. Select the CSV file with special characters
5. Click the import button or trigger the import

## Expected Behavior

The CSV import should complete successfully, processing all rows including those with special characters or accented characters.

## Actual Behavior

The application crashes. The import starts but then the screen goes white and the user is redirected to an error page.

## Environment

- **Browser:** Chrome 120
- **OS:** macOS Sonoma
- **User:** DrDexter6000
