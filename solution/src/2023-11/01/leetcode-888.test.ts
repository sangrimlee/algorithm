import { fairCandySwap } from './leetcode-888';

describe('2023-11-01: LeetCode 888', () => {
  test('Example 1', () => {
    expect(fairCandySwap([1, 1], [2, 2])).toEqual([1, 2]);
  });
  test('Example 2', () => {
    expect(fairCandySwap([1, 2], [2, 3])).toEqual([1, 2]);
  });
  test('Example 3', () => {
    expect(fairCandySwap([2], [1, 3])).toEqual([2, 3]);
  });
});
