import { createTree } from '@algorithm/lib';
import { findBottomLeftValue } from './leetcode-513';

describe('2024-02-28: LeetCode 513', () => {
  test('Example 1', () => {
    expect(findBottomLeftValue(createTree([2, 1, 3]))).toBe(1);
  });
  test('Example 2', () => {
    expect(
      findBottomLeftValue(createTree([1, 2, 3, 4, null, 5, 6, null, null, null, null, 7])),
    ).toBe(7);
  });
});
