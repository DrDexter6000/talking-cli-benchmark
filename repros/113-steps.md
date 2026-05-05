# Reproduction Steps for Issue #113

**Title:** Pagination resets to page 1 when applying filters

---

## Steps to Reproduce

1. Open the application in Safari 17 on iOS.
2. Navigate to a list or table view that supports both pagination and filtering.
3. Navigate to **page 2** (or any page higher than 1) of the results.
4. Apply a filter to the results.

## Expected Behavior

The applied filter should take effect while keeping the user on the current page (page 2). The results on the current page should reflect the filtered data.

## Actual Behavior

Applying a filter causes the pagination to reset to **page 1**. The filter itself is correctly applied, but the user is moved back to page 1. To return to page 2, the user must manually navigate again — at which point the filter is still active.

## Environment

- **Primary Browser:** Safari 17 on iOS
- **Also reproduced on:** Android Chrome (reported by colleague)
- **Feature:** List/table view with pagination and filtering
