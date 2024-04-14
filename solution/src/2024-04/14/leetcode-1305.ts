import { TreeNode } from '@algorithm/lib';

/**
 * 1305. All Elements in Two Binary Search Trees
 * https://leetcode.com/problems/all-elements-in-two-binary-search-trees
 */
export function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  function inorder(node: TreeNode | null, arr: number[] = []) {
    if (node === null) {
      return arr;
    }
    inorder(node.left, arr);
    arr.push(node.val);
    inorder(node.right, arr);
    return arr;
  }

  function merge(arr1: number[], arr2: number[]) {
    const result: number[] = [];

    let [i, j] = [0, 0];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i += 1;
      } else {
        result.push(arr2[j]);
        j += 1;
      }
    }
    return [...result, ...arr1.slice(i), ...arr2.slice(j)];
  }

  return merge(inorder(root1), inorder(root2));
}
