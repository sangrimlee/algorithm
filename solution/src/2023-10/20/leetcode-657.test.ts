import { judgeCircle } from './leetcode-657';

describe('2023-10-20: LeetCode 657', () => {
  test('Example 1', () => {
    expect(judgeCircle('UD')).toBe(true);
  });
  test('Example 2', () => {
    expect(judgeCircle('LL')).toBe(false);
  });
});
