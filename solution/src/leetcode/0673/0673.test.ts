import { findNumberOfLIS } from './0673';

describe('LeetCode 0673', () => {
  test('Example 1', () => {
    expect(findNumberOfLIS([1, 3, 5, 4, 7])).toBe(2);
  });
  test('Example 2', () => {
    expect(findNumberOfLIS([2, 2, 2, 2, 2])).toBe(5);
  });
});
