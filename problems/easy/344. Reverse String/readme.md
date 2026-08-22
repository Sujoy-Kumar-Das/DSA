# 344. Reverse String

## Problem Statement
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

## Approach:

- Need to return an array that will reverse array items like first index will be set in last index.
- Need to track which index need to update and how many items need to update next.
- Start a loop and then store a the current index value.
- Then set the current index value with last index value.
- Then change the last index value with temp index value.


- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
