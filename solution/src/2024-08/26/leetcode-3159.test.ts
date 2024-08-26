import { occurrencesOfElement } from './leetcode-3159';

describe('2024-08-26: LeetCode 3159', () => {
  test('Example 1', () => {
    expect(occurrencesOfElement([1, 3, 1, 7], [1, 3, 2, 4], 1)).toEqual([0, -1, 2, -1]);
  });
  test('Example 2', () => {
    expect(occurrencesOfElement([1, 2, 3], [10], 5)).toEqual([-1]);
  });
});
