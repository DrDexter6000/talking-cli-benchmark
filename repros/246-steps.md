# Reproduction Steps: App crashes on CSV import with special characters

**Issue:** #246 — App crashes on CSV import with special characters

## Steps to Reproduce

1. Open the application.
2. Attempt to import a CSV file that contains special characters (e.g., accented characters mixed with regular text).
3. Start the import process.
4. Observe that the import begins, but the screen goes white and an error page appears.

## Expected Behavior

The CSV file should import successfully without crashing. The user should be able to import their customer list.

## Actual Behavior

The application crashes during import. The screen goes white and an error page is displayed. The import starts normally but fails when encountering special characters.

## Environment

- **Browser:** Chrome 120
- **OS:** macOS Sonoma
- **File type:** CSV with a mix of regular text and accented characters
