import { frequencySort } from './leetcode-1636';

describe('2023-12-14: LeetCode 1636', () => {
  test('Example 1', () => {
    expect(frequencySort([1, 1, 2, 2, 2, 3])).toEqual([3, 1, 1, 2, 2, 2]);
  });
  test('Example 2', () => {
    expect(frequencySort([2, 3, 1, 3, 2])).toEqual([1, 3, 3, 2, 2]);
  });
  test('Example 3', () => {
    expect(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])).toEqual([5, -1, 4, 4, -6, -6, 1, 1, 1]);
  });
});
