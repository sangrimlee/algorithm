import { createTree } from '@algorithm/lib';
import { maxPathSum } from './0124';

describe('LeetCode 0124', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 3]);
    expect(maxPathSum(root)).toBe(6);
  });

  test('Example 2', () => {
    const root = createTree([-10, 9, 20, null, null, 15, 7]);
    expect(maxPathSum(root)).toBe(42);
  });
});
