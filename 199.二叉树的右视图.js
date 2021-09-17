/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let result = []
    if (root) {
        result.push(root.val)
        if (root.right) result = result.concat(rightSideView(root.right))
        else if (root.left) result = result.concat(rightSideView(root.left))
    }
    return result
};
// @lc code=end

