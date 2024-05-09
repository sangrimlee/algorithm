import { maximumHappinessSum } from './leetcode-3075';

describe('2024-05-09: LeetCode 3075', () => {
  test('Example 1', () => {
    expect(maximumHappinessSum([1, 2, 3], 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(maximumHappinessSum([1, 1, 1, 1], 2)).toBe(1);
  });
  test('Example 3', () => {
    expect(maximumHappinessSum([2, 3, 4, 5], 1)).toBe(5);
  });
});
