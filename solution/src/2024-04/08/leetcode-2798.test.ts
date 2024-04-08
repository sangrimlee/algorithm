import { numberOfEmployeesWhoMetTarget } from './leetcode-2798';

describe('2024-04-08: LeetCode 2798', () => {
  test('Example 1', () => {
    expect(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)).toBe(3);
  });
  test('Example 2', () => {
    expect(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6)).toBe(0);
  });
});
