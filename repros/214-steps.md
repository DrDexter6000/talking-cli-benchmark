# Reproduction Steps for Issue #214: Pagination resets to page 1 when applying filters

## Steps to Reproduce
1. Open the application using Safari 17 on iOS (also reproducible on Android Chrome).
2. Navigate to a paginated list view (e.g., product list, user list).
3. Navigate to page 2 or higher.
4. Apply any filter to the results.
5. Observe the pagination state.

## Expected Behavior
The filter should be applied and the results should stay on the current page (e.g., page 2). The user should not need to re-navigate after changing filters.

## Actual Behavior
The pagination resets to page 1 immediately when the filter is applied, even though the filter is correctly applied to the results. The user then has to manually navigate back to page 2 or higher to continue. Navigating to page 2 again maintains the applied filter correctly — the issue only occurs when applying a filter while on a page other than page 1.

## Environment
- **Browser:** Safari 17 on iOS (primary), also reproduces on Android Chrome
- **OS:** iOS (primary), Android (secondary)
