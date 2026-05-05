# Reproduction Steps: Pagination resets to page 1 when applying filters

**Issue:** #248 — Pagination resets to page 1 when applying filters

## Steps to Reproduce

1. Open the application and navigate to a paginated list of results.
2. Navigate to page 2 or higher.
3. Apply a filter to the results.
4. Observe that the results reset back to page 1, even though the filter is correctly applied.
5. Navigate to page 2 again — the filter remains applied.

## Expected Behavior

When a filter is applied while on a higher page (e.g., page 2), the pagination should not reset to page 1 unnecessarily. The user should not have to re-navigate to their desired page after every filter change.

## Actual Behavior

Applying a filter while on page 2 or higher resets the results back to page 1. The filter does get applied correctly, but the pagination position is lost. The user has to manually navigate back to the desired page after every filter adjustment.

## Environment

- **Browser:** Safari 17
- **OS:** iOS
- **Also reported on:** Android Chrome (by colleague)
