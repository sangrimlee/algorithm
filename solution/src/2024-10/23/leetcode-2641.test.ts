import { compareTree, createTree } from '@algorithm/lib';
import { replaceValueInTree } from './leetcode-2641';

describe('2024-10-23: LeetCode 2641', () => {
  test('Example 1', () => {
    const root = createTree([5, 4, 9, 1, 10, null, 7]);
    const answer = createTree([0, 0, 0, 7, 7, null, 11]);
    expect(compareTree(replaceValueInTree(root), answer)).toBe(true);
  });
  test('Example 2', () => {
    const root = createTree([3, 1, 2]);
    const answer = createTree([0, 0, 0]);
    expect(compareTree(replaceValueInTree(root), answer)).toBe(true);
  });
});
