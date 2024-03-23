import { compareTree, createTree } from '@algorithm/lib';
import { constructMaximumBinaryTree } from './leetcode-654';

describe('2024-03-23: LeetCode 654', () => {
  test('Example 1', () => {
    const root = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]);
    const answer = createTree([6, 3, 5, null, 2, 0, null, null, null, null, 1]);
    expect(compareTree(root, answer)).toBe(true);
  });
  test('Example 2', () => {
    const root = constructMaximumBinaryTree([3, 2, 1]);
    const answer = createTree([3, null, 2, null, null, null, 1]);
    expect(compareTree(root, answer)).toBe(true);
  });
});
