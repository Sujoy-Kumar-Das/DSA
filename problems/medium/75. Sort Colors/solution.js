/**
 * Problem: 75. Sort Colors
 * Link: https://leetcode.com/problems/sort-colors/description/
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */


var sortColors = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    let currsor = 0;


    while (currsor <= end) {

        if (nums[currsor] === 0) {
            let temp = nums[start];
            nums[start] = nums[currsor];
            nums[currsor] = temp;

            start++;
            currsor++;
        }

        else if (nums[currsor] === 2) {
            let temp = nums[end];
            nums[end] = nums[currsor];
            nums[currsor] = temp;

            end--;
        }

        else {
            currsor++;
        }




    }




};
