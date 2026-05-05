# Reproduction Steps — Issue #246: App crashes on CSV import with special characters

## Steps to Reproduce

1. Open the application in Chrome 120 on macOS Sonoma.
2. Attempt to import a CSV file that contains special characters (e.g., accented characters mixed with regular text).
3. Start the import process.
4. Observe that the screen goes white and an error page is displayed.

## Expected Behavior

The CSV file should import successfully, handling special characters (such as accented characters) in the data without crashing. The user should be able to import their customer list without errors.

## Actual Behavior

The entire application crashes during the import. The screen goes white and the user is presented with an error page. The import starts normally but fails upon encountering special characters.

## Environment

- **Browser:** Chrome 120
- **OS:** macOS Sonoma
- **File type:** CSV with special characters (accented characters mixed with regular text)
