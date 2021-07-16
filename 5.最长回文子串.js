/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 0) return ''
    let maxLength = 1
    let maxIndex = 0
    for (let i = 0; i < s.length; i++) {
        let curIndex = left = right = i
        while (left >= 0) {
            if (s[left] === s[curIndex]) {
                left--
            } else {
                break
            }
        }
        while (right <= s.length - 1) {
            if (s[right] === s[curIndex]) {
                right++
            } else {
                break
            }
        }
        while (left >= 0 && right <= s.length - 1) {
            if (s[left] === s[right]) {
                left--
                right++
            } else {
                break
            }
        }

        if ((--right) - (++left) + 1 > maxLength) {
            maxLength = right - left + 1
            maxIndex = left
        }
    }
    return s.substr(maxIndex, maxLength) || ''
};
// @lc code=end

console.log(longestPalindrome('babad'))
