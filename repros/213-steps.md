# Reproduction Steps for Issue #213 — Search returns 500 error with certain queries

## Steps to Reproduce
1. Open the application in Firefox 121 on Windows 11.
2. Navigate to the search feature.
3. Enter a search query that includes double quotation marks, for example: `project "alpha"`
4. Submit the search query.
5. Observe the server response.

## Expected Behavior
The search should return matching results normally, without errors.

## Actual Behavior
A **500 Internal Server Error** is returned. The search fails completely.

## Additional Notes
- This only started happening after the last application update.
- Normal searches (without quotes or special characters) work fine.
- Quote marks are the most consistent trigger for the error, though other special characters can also cause it intermittently.

## Environment
- **Browser**: Firefox 121
- **OS**: Windows 11
