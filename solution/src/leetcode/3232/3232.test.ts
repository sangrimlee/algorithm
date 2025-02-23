import { canAliceWin } from './3232';

describe('LeetCode 3232', () => {
  test('Example 1', () => {
    expect(canAliceWin([1, 2, 3, 4, 10])).toBe(false);
  });
  test('Example 2', () => {
    expect(canAliceWin([1, 2, 3, 4, 5, 14])).toBe(true);
  });
  test('Example 3', () => {
    expect(canAliceWin([5, 5, 5, 25])).toBe(true);
  });
});
