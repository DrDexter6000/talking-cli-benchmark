# Reproduction Steps for Issue #212: App crashes on CSV import with special characters

## Steps to Reproduce
1. Open the application using Chrome 120 on macOS Sonoma.
2. Navigate to the CSV import feature.
3. Select a CSV file that contains special characters (e.g., accented characters like é, ñ, ü).
4. Begin the import process.
5. Observe the application behavior.

## Expected Behavior
The CSV file should import successfully. All records, including those containing special/accented characters, should be processed and added to the system without errors.

## Actual Behavior
The application crashes. After starting the import, the screen turns white and an error page is displayed. The import does not complete.

## Environment
- **Browser:** Chrome 120
- **OS:** macOS Sonoma
- **File type:** CSV with special/accented characters
