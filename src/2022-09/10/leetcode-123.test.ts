import { maxProfitIII } from './leetcode-123';

describe('2022-09-10: LeetCode 123', () => {
  test('Example 1', () => {
    expect(maxProfitIII([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6);
  });

  test('Example 2', () => {
    expect(maxProfitIII([1, 2, 3, 4, 5])).toBe(4);
  });

  test('Example 3', () => {
    expect(maxProfitIII([7, 6, 4, 3, 1])).toBe(0);
  });
});
