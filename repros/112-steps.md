# Reproduction Steps for Issue #112

**Title:** Search returns 500 error with certain queries

---

## Steps to Reproduce

1. Open the application in Firefox 121 on Windows 11.
2. Locate the search functionality.
3. Enter a query containing one or more double-quote characters (e.g., `project "alpha"`).
4. Submit the search.

## Expected Behavior

The search should return matching results normally, regardless of whether the query contains quote characters.

## Actual Behavior

The search returns a **500 Internal Server Error**. Normal searches (without quotes or special characters) work correctly. Quote characters are the most consistent trigger; other special characters may also occasionally produce the same error.

## Environment

- **Browser:** Firefox 121
- **Operating System:** Windows 11
- **Feature:** Search
- **Note:** Issue started after the last application update.
