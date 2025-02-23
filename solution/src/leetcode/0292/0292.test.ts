import { canWinNim } from './0292';

describe('LeetCode 0292', () => {
  test('Example 1', () => {
    expect(canWinNim(4)).toBe(false);
  });
  test('Example 2', () => {
    expect(canWinNim(1)).toBe(true);
  });
  test('Example 3', () => {
    expect(canWinNim(2)).toBe(true);
  });
});
