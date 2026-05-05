# Reproduction Steps for Issue #213: Search returns 500 error with certain queries

## Steps to Reproduce
1. Open the application using Firefox 121 on Windows 11.
2. Navigate to the search feature.
3. Enter a search query that includes double quotation marks, e.g., `project "alpha"`.
4. Submit the search.
5. Observe the response.

## Expected Behavior
Search results should be returned for the query, with quotes handled gracefully (e.g., treated as literal characters or ignored).

## Actual Behavior
A 500 Internal Server Error is returned. The search fails. Normal searches (without quotes) work fine. Other special characters may also trigger the error intermittently, but quotation marks are the most consistent trigger.

## Environment
- **Browser:** Firefox 121
- **OS:** Windows 11
- **Note:** The issue started occurring after the last application update.
