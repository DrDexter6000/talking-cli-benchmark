# Reproduction Steps for Issue #146

## Pagination resets to page 1 when applying filters

## Steps to Reproduce

1. Open the application with paginated results
2. Navigate from page 1 to page 2 or a higher page number
3. Apply a filter to the results (e.g., select a category filter)
4. Observe the current page number

## Expected Behavior

After applying a filter, the user should remain on the same page number they were viewing. The filter should be applied to the current page of results.

## Actual Behavior

When a filter is applied, the results reset back to page 1 even though the user was viewing a higher page. The filter is correctly applied to the results, but the page number resets. To return to the desired page, the user must manually navigate again.

## Environment

- **Primary Browser:** Safari 17 on iOS
- **Additional Browser:** Android Chrome (reported by colleague)
- **User:** DrDexter6000
