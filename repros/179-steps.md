# Reproduction Steps for Issue #179

## Steps to Reproduce

1. Navigate to a list view that supports pagination (e.g., search results, product list, or filtered data)
2. Navigate to page 2 or a higher page number
3. Apply a filter to the current view
4. Observe the page number and filter state

## Expected Behavior

The filter should be applied while the user remains on the current page number. If there are results on the current page after filtering, the user should stay on that page.

## Actual Behavior

The pagination resets to page 1 after applying the filter. The filter itself is applied correctly, but the user must manually navigate back to their desired page. Navigating to page 2 again, the filter persists as expected.

## Environment

- Browser: Safari 17 on iOS
- Additional Testers: Issue also reproduced on Android Chrome
- User: DrDexter6000
