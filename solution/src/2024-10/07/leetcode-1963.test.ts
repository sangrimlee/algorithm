import { minSwaps } from './leetcode-1963';

describe('2024-10-07: LeetCode 1963', () => {
  test('Example 1', () => {
    expect(minSwaps('][][')).toBe(1);
  });
  test('Example 2', () => {
    expect(minSwaps(']]][[[')).toBe(2);
  });
  test('Example 3', () => {
    expect(minSwaps('[]')).toBe(0);
  });
});
