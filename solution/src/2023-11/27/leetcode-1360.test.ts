import { daysBetweenDates } from './leetcode-1360';

describe('2023-11-27: LeetCode 1360', () => {
  test('Example 1', () => {
    expect(daysBetweenDates('2019-06-29', '2019-06-30')).toBe(1);
  });
  test('Example 2', () => {
    expect(daysBetweenDates('2020-01-15', '2019-12-31')).toBe(15);
  });
});
