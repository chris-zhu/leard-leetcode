/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
    let result = []
    if (root) {
        // left 
        if (root.left) result = result.concat(inorderTraversal(root.left))
        // root 
        result.push(root.val)
        // right
        if (root.right) result = result.concat(inorderTraversal(root.right))
    }
    return result
};
// @lc code=end

