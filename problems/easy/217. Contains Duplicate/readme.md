# 217. Contains Duplicate

## Problem Statement
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## Approach:

- We need to track array items. That's why we need a Set.
- Traverse every array item via a loop.
- If an array item already exists in the set, immediately return it.
- If the item does not exist, then immediately add the item to the set.
- Finally, return false if no duplicate item exists.

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$
