import { digitSum } from './leetcode-2243';

describe('2024-02-16: LeetCode 2243', () => {
  test('Example 1', () => {
    expect(digitSum('11111222223', 3)).toBe('135');
  });
  test('Example 2', () => {
    expect(digitSum('00000000', 3)).toBe('000');
  });
});
