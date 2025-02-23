import { isWinner } from './2660';

describe('LeetCode 2660', () => {
  test('Example 1', () => {
    expect(isWinner([4, 10, 7, 9], [6, 5, 2, 3])).toBe(1);
  });
  test('Example 2', () => {
    expect(isWinner([3, 5, 7, 6], [8, 10, 10, 2])).toBe(2);
  });
  test('Example 3', () => {
    expect(isWinner([2, 3], [4, 1])).toBe(0);
  });
});
