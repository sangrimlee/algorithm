import { createTree } from '@1d1s/lib';
import { maxPathSum } from './leetcode-124';

describe('2022-12-11: LeetCode 124', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3]);
    expect(maxPathSum(root)).toBe(6);
  });

  test('Example 2', () => {
    const root = createTree([-10, 9, 20, null, null, 15, 7]);
    expect(maxPathSum(root)).toBe(42);
  });
});
