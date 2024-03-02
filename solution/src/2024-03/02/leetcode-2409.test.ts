import { countDaysTogether } from './leetcode-2409';

describe('2024-03-02: LeetCode 2409', () => {
  test('Example 1', () => {
    expect(countDaysTogether('08-15', '08-18', '08-16', '08-19')).toBe(3);
  });
  test('Example 2', () => {
    expect(countDaysTogether('10-01', '10-31', '11-01', '12-31')).toBe(0);
  });
});
