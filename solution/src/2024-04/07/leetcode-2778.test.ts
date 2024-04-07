import { sumOfSquares } from './leetcode-2778';

describe('2024-04-07: LeetCode 2778', () => {
  test('Example 1', () => {
    expect(sumOfSquares([1, 2, 3, 4])).toBe(21);
  });
  test('Example 2', () => {
    expect(sumOfSquares([2, 7, 1, 19, 18, 3])).toBe(63);
  });
});
