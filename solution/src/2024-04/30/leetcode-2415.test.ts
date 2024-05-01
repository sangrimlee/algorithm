import { compareTree, createTree } from '@algorithm/lib';
import { reverseOddLevels } from './leetcode-2415';

describe('2024-04-30: LeetCode 2415', () => {
  test('Example 1', () => {
    const root = createTree([2, 3, 5, 8, 13, 21, 34]);
    const answer = createTree([2, 5, 3, 8, 13, 21, 34]);
    expect(compareTree(reverseOddLevels(root), answer)).toBe(true);
  });
  test('Example 2', () => {
    const root = createTree([7, 13, 11]);
    const answer = createTree([7, 11, 13]);
    expect(compareTree(reverseOddLevels(root), answer)).toBe(true);
  });
  test('Example 3', () => {
    const root = createTree([0, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2]);
    const answer = createTree([0, 2, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1]);
    expect(compareTree(reverseOddLevels(root), answer)).toBe(true);
  });
});
