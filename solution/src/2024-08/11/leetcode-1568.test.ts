import { minDays } from './leetcode-1568';

describe('2024-08-11: LeetCode 1568', () => {
  test('Example 1', () => {
    expect(
      minDays([
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ]),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(minDays([[1, 1]])).toBe(2);
  });
});
