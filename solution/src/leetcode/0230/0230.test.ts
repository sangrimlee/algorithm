import { createTree } from '@algorithm/lib';
import { kthSmallest } from './0230';

describe('LeetCode 0230', () => {
  test('Example 1', () => {
    const root = createTree([3, 1, 4, null, 2]);
    expect(kthSmallest(root, 1)).toBe(1);
  });
  test('Example 2', () => {
    const root = createTree([5, 3, 6, 2, 4, null, null, 1]);
    expect(kthSmallest(root, 3)).toBe(3);
  });
});
