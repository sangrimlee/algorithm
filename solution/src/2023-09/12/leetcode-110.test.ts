import { createTree } from '@algorithm/lib';
import { isBalanced } from './leetcode-110';

describe('2023-09-12: LeetCode 110', () => {
  test('Example 1', () => {
    const root = createTree([3, 9, 20, null, null, 15, 7]);
    expect(isBalanced(root)).toBe(true);
  });

  test('Example 2', () => {
    const root = createTree([1, 2, 2, 3, 3, null, null, 4, 4]);
    expect(isBalanced(root)).toBe(false);
  });

  test('Example 3', () => {
    const root = createTree([]);
    expect(isBalanced(root)).toBe(true);
  });
});
