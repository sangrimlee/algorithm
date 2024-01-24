import { minMovesToSeat } from './leetcode-2037';

describe('2024-01-24: LeetCode 2037', () => {
  test('Example 1', () => {
    expect(minMovesToSeat([3, 1, 5], [2, 7, 4])).toBe(4);
  });
  test('Example 2', () => {
    expect(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])).toBe(7);
  });
  test('Example 3', () => {
    expect(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])).toBe(4);
  });
});
