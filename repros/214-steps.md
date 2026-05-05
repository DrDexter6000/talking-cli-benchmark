# Reproduction Steps for Issue #214 — Pagination resets to page 1 when applying filters

## Steps to Reproduce
1. Open the application in Safari 17 on iOS.
2. Navigate to a paginated list view.
3. Navigate to page 2 or higher using pagination controls.
4. Apply a filter to the current results.
5. Observe what page the results show after the filter is applied.
6. (Optional) Navigate back to page 2 and check if the filter is still applied.

## Expected Behavior
When a filter is applied, the results should update and remain on the current page. The user should not have to re-navigate after changing filters.

## Actual Behavior
Applying a filter while on page 2 or higher resets the results back to page 1. The filter is correctly applied to the results, but the user is taken back to the first page. If the user navigates to page 2 again, the filter remains active — the problem only occurs at the moment a filter is applied while on a page other than page 1.

## Additional Notes
- A colleague reports the same issue occurs on Android Chrome.

## Environment
- **Browser**: Safari 17 on iOS (primary); also Android Chrome (secondary)
- **OS**: iOS (primary); Android (secondary)
