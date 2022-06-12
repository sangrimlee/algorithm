import { maximumUniqueSubarray } from './leetcode-1695';

describe('2022-06-12: LeetCode 1695', () => {
  test('Example 1', () => {
    expect(maximumUniqueSubarray([4, 2, 4, 5, 6])).toBe(17);
  });

  test('Example 2', () => {
    expect(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5])).toBe(8);
  });
});
