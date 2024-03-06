import { haveConflict } from './leetcode-2446';

describe('2024-03-06: LeetCode 2446', () => {
  test('Example 1', () => {
    expect(haveConflict(['01:15', '02:00'], ['02:00', '03:00'])).toBe(true);
  });
  test('Example 2', () => {
    expect(haveConflict(['01:00', '02:00'], ['01:20', '03:00'])).toBe(true);
  });
  test('Example 3', () => {
    expect(haveConflict(['10:00', '11:00'], ['14:00', '15:00'])).toBe(false);
  });
});
