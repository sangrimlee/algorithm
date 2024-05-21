import { subsets } from './leetcode-78';

describe('2024-05-21: LeetCode 78', () => {
  test('Example 1', () => {
    expect(subsets([1, 2, 3])).toEqual([[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []]);
  });
  test('Example 2', () => {
    expect(subsets([0])).toEqual([[0], []]);
  });
});
