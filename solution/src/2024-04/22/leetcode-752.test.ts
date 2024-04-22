import { openLock } from './leetcode-752';

describe('2024-04-22: LeetCode 752', () => {
  test('Example 1', () => {
    expect(openLock(['0201', '0101', '0102', '1212', '2002'], '0202')).toBe(6);
  });
  test('Example 2', () => {
    expect(openLock(['8888'], '0009')).toBe(1);
  });
  test('Example 3', () => {
    expect(openLock(['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888')).toBe(
      -1,
    );
  });
});
