import { createTree } from '@lib/create-tree';
import { maxAncestorDiff } from './leetcode-1026';

describe('2022-12-09: Leetcode 1026', () => {
  test('Example 1', () => {
    const root = createTree([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]);
    expect(maxAncestorDiff(root)).toBe(7);
  });

  test('Example 2', () => {
    const root = createTree([1, 2, null, 0, null, null, null, 3]);
    expect(maxAncestorDiff(root)).toBe(3);
  });
});
