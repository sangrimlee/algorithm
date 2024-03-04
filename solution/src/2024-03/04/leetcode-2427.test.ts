import { commonFactors } from './leetcode-2427';

describe('2024-03-04: LeetCode 2427', () => {
  test('Example 1', () => {
    expect(commonFactors(12, 6)).toBe(4);
  });
  test('Example 2', () => {
    expect(commonFactors(25, 30)).toBe(2);
  });
});
