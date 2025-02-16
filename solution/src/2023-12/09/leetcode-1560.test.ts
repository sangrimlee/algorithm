import { mostVisited } from './leetcode-1560';

describe('2023-12-09: LeetCode 1560', () => {
  test('Example 1', () => {
    expect(mostVisited(4, [1, 3, 1, 2])).toEqual([1, 2]);
  });
  test('Example 2', () => {
    expect(mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2])).toEqual([2]);
  });
  test('Example 3', () => {
    expect(mostVisited(7, [1, 3, 5, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  test('Example 4', () => {
    expect(mostVisited(7, [5, 2])).toEqual([1, 2, 5, 6, 7]);
  });
});
