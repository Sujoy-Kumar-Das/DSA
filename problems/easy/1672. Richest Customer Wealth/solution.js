/**
 * Problem: 1672. Richest Customer Wealth
 * Link: https://leetcode.com/problems/richest-customer-wealth/description/
 * Difficulty: Easy
 * Time Complexity: O(i*j)
 * Space Complexity: O(1)
 */


var maximumWealth = function (accounts) {
    let max = 0;

    for (let i = 0; i < accounts.length; i++) {

        const innerAccount = accounts[i];
        let innnerSum = 0;

        for (let j = 0; j < innerAccount.length; j++) {
            innnerSum = innnerSum + innerAccount[j];

        }

        if (innnerSum > max) {
            max = innnerSum;
        }

    }

    return max;
};
