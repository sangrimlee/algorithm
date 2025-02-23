import { isLongPressedName } from './0925';

describe('LeetCode 0925', () => {
  test('Example 1', () => {
    expect(isLongPressedName('alex', 'aaleex')).toBe(true);
  });
  test('Example 2', () => {
    expect(isLongPressedName('saeed', 'ssaaedd')).toBe(false);
  });
  test('Example 3', () => {
    expect(isLongPressedName('alexd', 'ale')).toBe(false);
  });
});
