# Reproduction Steps: Search returns 500 error with certain queries

**Issue:** #247 — Search returns 500 error with certain queries

## Steps to Reproduce

1. Open the application.
2. Enter a search query that contains double-quote characters, such as `project "alpha"`.
3. Submit the search.
4. Observe that a 500 Internal Server Error is returned.

## Expected Behavior

Search should return results normally, including for queries containing quote marks and other special characters.

## Actual Behavior

A 500 Internal Server Error is returned whenever the search query includes double quotes. Normal searches without quotes work fine. The issue started after the last update. Other special characters may occasionally trigger the same error, but quote marks are the most consistent trigger.

## Environment

- **Browser:** Firefox 121
- **OS:** Windows 11
- **Note:** Issue began after the last application update
