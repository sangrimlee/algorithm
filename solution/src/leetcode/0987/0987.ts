import type { TreeNode } from '@algorithm/lib';

/**
 * 987. Vertical Order Traversal of a Binary Tree
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
 */
export function verticalTraversal(root: TreeNode | null): number[][] {
  const traverseMap = new Map<number, Map<number, number[]>>();

  function addNode(value: number, col: number, row: number) {
    const cols = traverseMap.get(col);
    if (!cols) {
      traverseMap.set(col, new Map<number, number[]>([[row, [value]]]));
    } else {
      const rows = cols.get(row);
      if (!rows) {
        cols.set(row, [value]);
      } else {
        const sortedRows = [...rows, value].sort((a, b) => a - b);
        cols.set(row, sortedRows);
      }
    }
  }

  function traverse(node: TreeNode | null, col: number, row: number) {
    if (node) {
      addNode(node.val, col, row);
      traverse(node.left, col - 1, row + 1);
      traverse(node.right, col + 1, row + 1);
    }
  }

  traverse(root, 0, 0);

  const sortedCols = Array.from(traverseMap.entries()).sort(([a], [b]) => a - b);

  return sortedCols.map(([, rows]) => {
    const sortedRows = Array.from(rows.entries()).sort(([a], [b]) => a - b);
    return sortedRows.flatMap(([, row]) => row);
  });
}
