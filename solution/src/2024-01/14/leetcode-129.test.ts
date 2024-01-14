import { createTree } from '@algorithm/lib';
import { sumNumbers } from './leetcode-129';

describe('2024-01-14: LeetCode 129', () => {
  test('Example 1', () => {
    expect(sumNumbers(createTree([1, 2, 3]))).toBe(25);
  });
  test('Example 2', () => {
    expect(sumNumbers(createTree([4, 9, 0, 5, 1]))).toBe(1026);
  });
});
