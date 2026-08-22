# 1672. Richest Customer Wealth

## Problem Statement
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

## Approach:

- Need to return the sum of the max value from the 2d array. Loop over the first array. Then, inside the first loop, again loop the nested arrays. Then store the total sum value inside the first loop that can be reset after every time the first loop ends. Then store the max value, then return it.

- **Time Complexity:** $O(i*j)$
- **Space Complexity:** $O(1)$
