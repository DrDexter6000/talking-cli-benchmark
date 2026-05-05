# Reproduction Steps for Issue #146

## Issue Summary
Pagination resets to page 1 when applying filters

## Steps to Reproduce

1. Open the application in Safari 17 on iOS (also reproducible on Android Chrome)
2. Navigate to a paginated list of results
3. Navigate to page 2 or higher
4. Apply a filter to the results (e.g., select a category, date range, or status filter)
5. Observe the pagination state

## Expected Behavior
The current page number (e.g., page 2) should be retained when applying a filter. The filter should be applied to the current page of results.

## Actual Behavior
The page resets to page 1 when applying a filter, even though the user was viewing page 2 or higher. The filter does get applied to the results. To return to page 2, the user must manually navigate again.

## Environment

- **Primary browser:** Safari 17 on iOS
- **Secondary browser:** Android Chrome (also affected)
