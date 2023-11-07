import { createTree } from '@algorithm/lib';
import { isUnivalTree } from './leetcode-965';

describe('2023-11-07: LeetCode 965', () => {
  test('Example 1', () => {
    expect(isUnivalTree(createTree([1, 1, 1, 1, 1, null, 1]))).toBe(true);
  });
  test('Example 2', () => {
    expect(isUnivalTree(createTree([2, 2, 2, 5, 2]))).toBe(false);
  });
});
