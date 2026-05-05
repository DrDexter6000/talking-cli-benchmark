# Reproduction Steps — Issue #248: Pagination resets to page 1 when applying filters

## Steps to Reproduce

1. Open the application in Safari 17 on iOS.
2. Navigate to a paginated list of results (e.g., page 2 or higher).
3. Apply a filter to the results.
4. Observe that the results reset back to page 1, even though the filter is correctly applied.
5. Navigate to page 2 again and observe that the filter remains applied.

## Expected Behavior

When a filter is applied while on a higher page (e.g., page 2), the pagination should maintain the current page or return to page 1 in a way that doesn't require the user to re-navigate after every filter change. The user should not have to repeatedly navigate back to their desired page after each filter adjustment.

## Actual Behavior

Applying a filter from page 2 or higher resets the results back to page 1. The filter is correctly applied to the results, but the pagination position is lost, forcing the user to manually navigate back to their desired page after every filter change. This is described as annoying and disruptive to the workflow.

## Environment

- **Browser:** Safari 17
- **OS:** iOS
- **Also reported on:** Android Chrome (by colleague)
