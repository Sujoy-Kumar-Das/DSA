/**
 * Problem: 217. Contains Duplicate
 * Link: https://leetcode.com/problems/contains-duplicate/description/
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var containsDuplicate = function (nums) {

    const hasItem = new Set();

    for (num of nums) {
        if (hasItem.has(num)) {
            return true;
        }

        hasItem.add(num)

    }
    return false;

}
