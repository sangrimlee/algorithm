import { createTree } from '@algorithm/lib';
import { pseudoPalindromicPaths } from './leetcode-1457';

describe('2024-01-24: LeetCode 1457', () => {
  test('Example 1', () => {
    expect(pseudoPalindromicPaths(createTree([2, 3, 1, 3, 1, null, 1]))).toBe(2);
  });
  test('Example 2', () => {
    expect(
      pseudoPalindromicPaths(createTree([2, 1, 1, 1, 3, null, null, null, null, null, 1])),
    ).toBe(1);
  });
  test('Example 3', () => {
    expect(pseudoPalindromicPaths(createTree([9]))).toBe(1);
  });
});
