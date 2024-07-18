import { TreeNode } from '@algorithm/lib';

/**
 * 1110. Delete Nodes And Return Forest
 * https://leetcode.com/problems/delete-nodes-and-return-forest
 */
export function delNodes(root: TreeNode | null, toDelete: number[]): TreeNode[] {
  const answer: TreeNode[] = [];
  const deletedNodes = new Set(toDelete);

  function deleteNode(node: TreeNode | null, isRootNode: boolean) {
    if (node === null) {
      return null;
    }
    const isDeleted = deletedNodes.has(node.val);
    if (isRootNode && !isDeleted) {
      answer.push(node);
    }
    node.left = deleteNode(node.left, isDeleted);
    node.right = deleteNode(node.right, isDeleted);
    return isDeleted ? null : node;
  }
  deleteNode(root, true);

  return answer;
}
