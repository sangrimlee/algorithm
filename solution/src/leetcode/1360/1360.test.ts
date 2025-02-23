import { daysBetweenDates } from './1360';

describe('LeetCode 1360', () => {
  test('Example 1', () => {
    expect(daysBetweenDates('2019-06-29', '2019-06-30')).toBe(1);
  });
  test('Example 2', () => {
    expect(daysBetweenDates('2020-01-15', '2019-12-31')).toBe(15);
  });
});
