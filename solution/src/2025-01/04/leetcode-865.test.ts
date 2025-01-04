import { compareTree, createTree } from '@algorithm/lib';
import { subtreeWithAllDeepest } from './leetcode-865';

describe('2025-01-04: LeetCode 865', () => {
  test('Example 1', () => {
    expect(
      compareTree(
        subtreeWithAllDeepest(createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])),
        createTree([2, 7, 4]),
      ),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(compareTree(subtreeWithAllDeepest(createTree([1])), createTree([1]))).toBe(true);
  });
  test('Example 3', () => {
    expect(
      compareTree(subtreeWithAllDeepest(createTree([0, 1, 3, null, 2])), createTree([2])),
    ).toBe(true);
  });
});
