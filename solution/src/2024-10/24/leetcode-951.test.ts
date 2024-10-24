import { createTree } from '@algorithm/lib';
import { flipEquiv } from './leetcode-951';

describe('2024-10-24: LeetCode 951', () => {
  test('Example 1', () => {
    expect(
      flipEquiv(
        createTree([1, 2, 3, 4, 5, 6, null, null, null, 7, 8]),
        createTree([1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7]),
      ),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(flipEquiv(createTree([]), createTree([]))).toBe(true);
  });
  test('Example 3', () => {
    expect(flipEquiv(createTree([]), createTree([1]))).toBe(false);
  });
});
