import { losingPlayer } from './leetcode-3222';

describe('2024-08-01: LeetCode 3222', () => {
  test('Example 1', () => {
    expect(losingPlayer(2, 7)).toBe('Alice');
  });
  test('Example 2', () => {
    expect(losingPlayer(4, 11)).toBe('Bob');
  });
});
