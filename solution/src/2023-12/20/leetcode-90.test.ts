import { subsetsWithDup } from './leetcode-90';

describe('2023-12-20: LeetCode 90', () => {
  test('Example 1', () => {
    expect(subsetsWithDup([1, 2, 2])).toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]);
  });
  test('Example 2', () => {
    expect(subsetsWithDup([0])).toEqual([[], [0]]);
  });
});
