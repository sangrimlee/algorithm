import { findTheWinner } from './1823';

describe('LeetCode 1823', () => {
  test('Example 1', () => {
    expect(findTheWinner(5, 2)).toBe(3);
  });
  test('Example 2', () => {
    expect(findTheWinner(6, 5)).toBe(1);
  });
});
