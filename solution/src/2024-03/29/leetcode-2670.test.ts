import { distinctDifferenceArray } from './leetcode-2670';

describe('2024-03-29: LeetCode 2670', () => {
  test('Example 1', () => {
    expect(distinctDifferenceArray([1, 2, 3, 4, 5])).toEqual([-3, -1, 1, 3, 5]);
  });
  test('Example 2', () => {
    expect(distinctDifferenceArray([3, 2, 3, 4, 2])).toEqual([-2, -1, 0, 2, 3]);
  });
});
