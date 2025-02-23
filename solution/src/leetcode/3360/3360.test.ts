import { canAliceWin } from './3360';

describe('LeetCode 3360', () => {
  test('Example 1', () => {
    expect(canAliceWin(12)).toBe(true);
  });
  test('Example 2', () => {
    expect(canAliceWin(1)).toBe(false);
  });
});
