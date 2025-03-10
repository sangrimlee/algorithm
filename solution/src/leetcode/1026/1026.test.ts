import { createTree } from '@algorithm/lib';
import { maxAncestorDiff } from './1026';

describe('LeetCode 1026', () => {
  test('Example 1', () => {
    const root = createTree([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]);
    expect(maxAncestorDiff(root)).toBe(7);
  });

  test('Example 2', () => {
    const root = createTree([1, null, 2, null, 0, 3]);
    expect(maxAncestorDiff(root)).toBe(3);
  });
});
