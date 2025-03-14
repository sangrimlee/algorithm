import { createTree } from '@algorithm/lib';
import { averageOfSubtree } from './2265';

describe('LeetCode 2265', () => {
  test('Example 1', () => {
    const root = createTree([4, 8, 5, 0, 1, null, 6]);
    expect(averageOfSubtree(root)).toBe(5);
  });
  test('Example 2', () => {
    const root = createTree([1]);
    expect(averageOfSubtree(root)).toBe(1);
  });
});
