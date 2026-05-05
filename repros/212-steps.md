# Reproduction Steps for Issue #212 — App crashes on CSV import with special characters

## Steps to Reproduce
1. Open the application in Chrome 120 on macOS Sonoma.
2. Navigate to the CSV import feature.
3. Select a CSV file that contains special characters (e.g., accented characters like é, ñ, ü) mixed with regular text.
4. Click to start the import process.
5. Observe the result as the import begins.

## Expected Behavior
The CSV file should import successfully, loading the customer list into the application without errors. Special characters in the file should be handled correctly.

## Actual Behavior
The application crashes during import. The screen goes white and an error page is displayed. The import does not complete.

## Environment
- **Browser**: Chrome 120
- **OS**: macOS Sonoma
- **File type**: CSV with a mix of regular text and accented/special characters
