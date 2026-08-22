/**
 * Problem: 344. Reverse String
 * Link: https://leetcode.com/problems/reverse-string/description/
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var reverseString = function (s) {

    let firstIndex = 0;
    let lastIndex = s.length - 1;

    while (firstIndex < lastIndex) {
        let temp = s[firstIndex];
        s[firstIndex] = s[lastIndex];
        s[lastIndex] = temp;

        firstIndex++;
        lastIndex--;
    }

    return s;

};
