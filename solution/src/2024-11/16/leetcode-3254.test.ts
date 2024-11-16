import { resultsArray } from './leetcode-3254';

describe('2024-11-16: LeetCode 3254', () => {
  test('Example 1', () => {
    expect(resultsArray([1, 2, 3, 4, 3, 2, 5], 3)).toEqual([3, 4, -1, -1, -1]);
  });
  test('Example 2', () => {
    expect(resultsArray([2, 2, 2, 2, 2], 4)).toEqual([-1, -1]);
  });
  test('Example 3', () => {
    expect(resultsArray([3, 2, 3, 2, 3, 2], 2)).toEqual([-1, 3, -1, 3, -1]);
  });
  test('Example 4', () => {
    expect(resultsArray([1, 3, 4], 2)).toEqual([-1, 4]);
  });
});
