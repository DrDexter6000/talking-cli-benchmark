# Reproduction Steps: Pagination Resets to Page 1 When Applying Filters

## Steps to Reproduce

1. Navigate to a list view that supports pagination
2. Navigate to page 2 or a higher page number
3. Apply a filter to the list (e.g., select a category filter, status filter, etc.)
4. Observe the page number after the filter is applied

## Expected Behavior

When a filter is applied while on page 2 or higher, the application should either:
- Stay on the current page (page 2+) with the filter applied, OR
- Reset to page 1 but clearly indicate this to the user

The applied filter should remain active.

## Actual Behavior

The page number resets to page 1 after applying the filter. The filter itself is correctly applied. When the user navigates back to page 2, the filter remains active. This requires the user to manually re-navigate to their desired page every time they change filters.

## Environment

- **Browser:** Safari 17
- **Operating System:** iOS
- **Additional Testing:** Also reproducible on Android Chrome (per user report)
- **User:** DrDexter6000
- **Issue Date:** 2026-05-05
