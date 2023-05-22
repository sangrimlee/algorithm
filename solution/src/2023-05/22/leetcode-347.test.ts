import { topKFrequent } from './leetcode-347';

describe('2023-05-22: LeetCode 347', () => {
  test('Example 1', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });
  test('Example 2', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });
});
