import { dayOfTheWeek } from './leetcode-1185';

describe('2023-11-20: LeetCode 1185', () => {
  test('Example 1', () => {
    expect(dayOfTheWeek(31, 8, 2019)).toBe('Saturday');
  });
  test('Example 2', () => {
    expect(dayOfTheWeek(18, 7, 1999)).toBe('Sunday');
  });
  test('Example 3', () => {
    expect(dayOfTheWeek(15, 8, 1993)).toBe('Sunday');
  });
});
