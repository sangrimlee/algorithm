import { createTree } from '@algorithm/lib';
import { isEvenOddTree } from './leetcode-1609';

describe('2024-02-29: LeetCode 1609', () => {
  test('Example 1', () => {
    expect(isEvenOddTree(createTree([1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2]))).toBe(
      true,
    );
  });
  test('Example 2', () => {
    expect(isEvenOddTree(createTree([5, 4, 2, 3, 3, 7]))).toBe(false);
  });
  test('Example 3', () => {
    expect(isEvenOddTree(createTree([5, 9, 1, 3, 5, 7]))).toBe(false);
  });
});
