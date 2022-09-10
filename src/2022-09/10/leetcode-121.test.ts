import { maxProfitI } from './leetcode-121';

describe('2022-09-10: LeetCode 121', () => {
  test('Example 1', () => {
    expect(maxProfitI([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('Example 3', () => {
    expect(maxProfitI([7, 6, 4, 3, 1])).toBe(0);
  });
});
