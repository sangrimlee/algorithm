import type { TreeNode } from '@algorithm/lib';

/**
 * 1382. Balance a Binary Search Tree
 * https://leetcode.com/problems/balance-a-binary-search-tree
 */
export function balanceBST(root: TreeNode | null): TreeNode | null {
  return sortedArrToBalanceBST(bstToSortedArr(root));
}

function bstToSortedArr(root: TreeNode | null): TreeNode[] {
  const arr: TreeNode[] = [];
  function inorderTraverse(node: TreeNode | null) {
    if (node === null) {
      return;
    }
    inorderTraverse(node.left);
    arr.push(node);
    inorderTraverse(node.right);
  }
  inorderTraverse(root);
  return arr;
}

function sortedArrToBalanceBST(arr: TreeNode[]) {
  function build(start: number, end: number) {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const node = arr[mid];
    node.left = build(start, mid - 1);
    node.right = build(mid + 1, end);
    return node;
  }
  return build(0, arr.length - 1);
}
