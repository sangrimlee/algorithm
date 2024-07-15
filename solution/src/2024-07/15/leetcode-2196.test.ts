import { compareTree, createTree } from '@algorithm/lib';
import { createBinaryTree } from './leetcode-2196';

describe('2024-07-15: LeetCode 2196', () => {
  test('Example 1', () => {
    const answer = createTree([50, 20, 80, 15, 17, 19]);
    expect(
      compareTree(
        createBinaryTree([
          [20, 15, 1],
          [20, 17, 0],
          [50, 20, 1],
          [50, 80, 0],
          [80, 19, 1],
        ]),
        answer,
      ),
    ).toBe(true);
  });
  test('Example 2', () => {
    const answer = createTree([1, 2, null, null, 3, null, null, null, null, 4]);
    expect(
      compareTree(
        createBinaryTree([
          [1, 2, 1],
          [2, 3, 0],
          [3, 4, 1],
        ]),
        answer,
      ),
    ).toBe(true);
  });
});
