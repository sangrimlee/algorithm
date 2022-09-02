export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function createTree(arr: (number | null)[]) {
  const n = arr.length;
  if (n === 0) {
    return null;
  }

  const treeNodes = arr.map((value) =>
    value !== null ? new TreeNode(value) : null
  );
  treeNodes.forEach((currentNode, i) => {
    if (currentNode) {
      const leftNode = 2 * (i + 1) - 1;
      const rightNode = leftNode + 1;
      if (leftNode < n) {
        currentNode.left = treeNodes[leftNode];
      }
      if (rightNode < n) {
        currentNode.right = treeNodes[rightNode];
      }
    }
  });

  return treeNodes[0];
}
