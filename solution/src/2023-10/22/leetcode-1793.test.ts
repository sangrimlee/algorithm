import { maximumScore } from './leetcode-1793';

describe('2023-10-22: LeetCode 1793', () => {
  test('Example 1', () => {
    expect(maximumScore([1, 4, 3, 7, 4, 5], 3)).toBe(15);
  });
  test('Example 2', () => {
    expect(maximumScore([5, 5, 4, 5, 4, 1, 1, 1], 0)).toBe(20);
  });
});
