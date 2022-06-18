import { minCameraCover, TreeNode } from './leetcode-968';

describe('2022-06-17: LeetCode 968', () => {
  function createExample(example: (0 | null)[]) {
    const treeNodes = example.map((value) =>
      value === 0 ? new TreeNode(value) : null
    );
    treeNodes.forEach((treeNode, index) => {
      if (!treeNode) {
        return;
      }
      const leftNode = (index + 1) * 2 - 1;
      const rightNode = (index + 1) * 2;
      if (leftNode < example.length) {
        treeNode.left = treeNodes[leftNode];
      }
      if (rightNode < example.length) {
        treeNode.right = treeNodes[rightNode];
      }
    });
    return treeNodes[0];
  }

  test('Example 1', () => {
    expect(minCameraCover(createExample([null]))).toBe(0);
  });

  test('Example 2', () => {
    expect(minCameraCover(createExample([0]))).toBe(1);
  });

  test('Example 3', () => {
    expect(minCameraCover(createExample([0, 0, null, 0, 0]))).toBe(1);
  });

  test('Example 4', () => {
    expect(
      minCameraCover(createExample([0, 0, null, 0, null, 0, null, null, 0]))
    ).toBe(2);
  });
});
