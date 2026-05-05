# Reproduction Steps — Issue #247: Search returns 500 error with certain queries

## Steps to Reproduce

1. Open the application in Firefox 121 on Windows 11.
2. Enter a search query that contains double-quote characters, such as `project "alpha"`.
3. Submit the search.
4. Observe a 500 Internal Server Error response.

## Expected Behavior

Search should return results for the query, handling quote characters (and other special characters) in the search string without error. Normal searches without quotes should continue to work as expected.

## Actual Behavior

Searching with quote marks in the query (e.g., `project "alpha"`) consistently returns a 500 Internal Server Error. This issue started occurring after the last update. Normal searches without special characters work fine. Other special characters may occasionally trigger the same error, but quote marks are the most consistent trigger.

## Environment

- **Browser:** Firefox 121
- **OS:** Windows 11
- **Additional notes:** Issue began after the last update
