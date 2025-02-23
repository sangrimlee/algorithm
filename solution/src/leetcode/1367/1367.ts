import type { ListNode, TreeNode } from '@algorithm/lib';

/**
 * 1367. Linked List in Binary Tree
 * https://leetcode.com/problems/linked-list-in-binary-tree
 */
export function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (head === null) {
    return true;
  }
  if (root === null) {
    return false;
  }

  const arr = [head.val];
  const dp = [0];
  let currentIndex = 0;
  let currentNode = head.next;
  while (currentNode !== null) {
    while (0 < currentIndex && currentNode.val !== arr[currentIndex]) {
      currentIndex = dp[currentIndex - 1];
    }
    currentIndex += currentNode.val === arr[currentIndex] ? 1 : 0;
    arr.push(currentNode.val);
    dp.push(currentIndex);
    currentNode = currentNode.next;
  }

  function dfs(root: TreeNode | null, i: number): boolean {
    if (root === null) {
      return false;
    }
    while (0 < i && root.val !== arr[i]) {
      i = dp[i - 1];
    }
    i += root.val === arr[i] ? 1 : 0;
    return i === dp.length || dfs(root.left, i) || dfs(root.right, i);
  }

  return dfs(root, 0);
}
