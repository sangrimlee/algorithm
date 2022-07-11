import { rightSideView, TreeNode } from './leetcode-199';

function createTree(arr: (number | null)[]) {
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

describe('2022-07-11: LeetCode 199', () => {
  test('Example 1', () => {
    const rootNode = createTree([1, 2, 3, null, 5, null, 4]);
    expect(rightSideView(rootNode)).toEqual([1, 3, 4]);
  });

  test('Example 2', () => {
    const rootNode = createTree([1, null, 3]);
    expect(rightSideView(rootNode)).toEqual([1, 3]);
  });

  test('Example 3', () => {
    const rootNode = createTree([]);
    expect(rightSideView(rootNode)).toEqual([]);
  });

  test('Example 4', () => {
    const rootNode = createTree([1, 2, 3, 4]);
    expect(rightSideView(rootNode)).toEqual([1, 3, 4]);
  });
});
