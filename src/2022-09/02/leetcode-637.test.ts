import { averageOfLevels, TreeNode } from './leetcode-637';

function createTreeFromArr(arr: (number | null)[]) {
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

describe('2022-09-02: LeetCode 637', () => {
  test('Example 1', () => {
    const arr = [3, 9, 20, null, null, 15, 7];
    const tree = createTreeFromArr(arr);
    expect(averageOfLevels(tree)).toEqual([3.0, 14.5, 11.0]);
  });

  test('Example 2', () => {
    const arr = [3, 9, 20, 15, 7];
    const tree = createTreeFromArr(arr);
    expect(averageOfLevels(tree)).toEqual([3.0, 14.5, 11.0]);
  });
});
