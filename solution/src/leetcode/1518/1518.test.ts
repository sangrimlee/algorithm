import { numWaterBottles } from './1518';

describe('LeetCode 1518', () => {
  test('Example 1', () => {
    expect(numWaterBottles(9, 3)).toBe(13);
  });
  test('Example 2', () => {
    expect(numWaterBottles(15, 4)).toBe(19);
  });
});
