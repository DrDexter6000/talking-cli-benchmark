# Reproduction Steps for Issue #111

**Title:** App crashes on CSV import with special characters

---

## Steps to Reproduce

1. Prepare a CSV file containing a mix of regular text and accented characters (e.g., names or text with accented letters such as café, naïve, or résumé).
2. Open the application in Chrome 120.
3. Navigate to the CSV import feature.
4. Select and import the prepared CSV file.

## Expected Behavior

The CSV import should complete successfully and the imported data should appear in the application without errors.

## Actual Behavior

The import begins, but then the screen goes blank (white) and the user is shown an error page. The entire application becomes inaccessible until the page is refreshed.

## Environment

- **Browser:** Chrome 120
- **Operating System:** macOS Sonoma
- **Feature:** CSV Import
