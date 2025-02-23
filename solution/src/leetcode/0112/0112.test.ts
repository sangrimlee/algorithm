import { createTree } from '@algorithm/lib';
import { hasPathSum } from './0112';

describe('LeetCode 0112', () => {
  test('Example 1', () => {
    const root = createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
    expect(hasPathSum(root, 22)).toBe(true);
  });

  test('Example 2', () => {
    const root = createTree([1, 2, 3]);
    expect(hasPathSum(root, 5)).toBe(false);
  });

  test('Example 3', () => {
    expect(hasPathSum(null, 0)).toBe(false);
  });
});
