import { digitSum } from './2243';

describe('LeetCode 2243', () => {
  test('Example 1', () => {
    expect(digitSum('11111222223', 3)).toBe('135');
  });
  test('Example 2', () => {
    expect(digitSum('00000000', 3)).toBe('000');
  });
});
