import { canAliceWin } from './leetcode-3360';

describe('2024-12-12: LeetCode 3360', () => {
  test('Example 1', () => {
    expect(canAliceWin(12)).toBe(true);
  });
  test('Example 2', () => {
    expect(canAliceWin(1)).toBe(false);
  });
});
