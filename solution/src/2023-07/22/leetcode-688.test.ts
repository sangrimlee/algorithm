import { knightProbability } from './leetcode-688';

describe('2023-07-22: LeetCode 688', () => {
  test('Example 1', () => {
    expect(knightProbability(3, 2, 0, 0)).toBe(0.0625);
  });
  test('Example 2', () => {
    expect(knightProbability(1, 0, 0, 0)).toBe(1.0);
  });
});
