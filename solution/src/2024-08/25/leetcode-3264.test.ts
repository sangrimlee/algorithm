import { getFinalState } from './leetcode-3264';

describe('2024-08-25: LeetCode 3264', () => {
  test('Example 1', () => {
    expect(getFinalState([2, 1, 3, 5, 6], 5, 2)).toEqual([8, 4, 6, 5, 6]);
  });
  test('Example 2', () => {
    expect(getFinalState([1, 2], 3, 4)).toEqual([16, 8]);
  });
});
