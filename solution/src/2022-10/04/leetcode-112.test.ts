import { createTree } from '@1d1s/lib';
import { hasPathSum } from './leetcode-112';

describe('2022-10-04: LeetCode 112', () => {
  test('Example 1', () => {
    const root = createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
    expect(hasPathSum(root, 22)).toBe(true);
  });

  test('Example 2', () => {
    const root = createTree([1, 2, 3]);
    expect(hasPathSum(root, 5)).toBe(false);
  });

  test('Example 1', () => {
    expect(hasPathSum(null, 0)).toBe(false);
  });
});
