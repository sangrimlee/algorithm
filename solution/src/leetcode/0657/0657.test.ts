import { judgeCircle } from './0657';

describe('LeetCode 0657', () => {
  test('Example 1', () => {
    expect(judgeCircle('UD')).toBe(true);
  });
  test('Example 2', () => {
    expect(judgeCircle('LL')).toBe(false);
  });
});
