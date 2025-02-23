import { topKFrequent } from './0347';

describe('LeetCode 0347', () => {
  test('Example 1', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });
  test('Example 2', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });
});
