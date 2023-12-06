import { numWaterBottles } from './leetcode-1518';

describe('2023-12-06: LeetCode 1518', () => {
  test('Example 1', () => {
    expect(numWaterBottles(9, 3)).toBe(13);
  });
  test('Example 2', () => {
    expect(numWaterBottles(15, 4)).toBe(19);
  });
});
