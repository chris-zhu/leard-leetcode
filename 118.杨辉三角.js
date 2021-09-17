/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = [[1]]
    while (result.length < numRows) {
        let len = result.length, lastArr = result[len - 1]
        let i = 0, newArr = [1]
        while (i < lastArr.length -1) {
            newArr.push(lastArr[i] + lastArr[++i])
        }
        newArr.push(1)
        result.push(newArr)
    }

    return result
};
// @lc code=end

