import { survivedRobotsHealths } from './leetcode-2751';

describe('2024-07-13: LeetCode 2751', () => {
  test('Example 1', () => {
    expect(survivedRobotsHealths([5, 4, 3, 2, 1], [2, 17, 9, 15, 10], 'RRRRR')).toEqual([
      2, 17, 9, 15, 10,
    ]);
  });
  test('Example 2', () => {
    expect(survivedRobotsHealths([3, 5, 2, 6], [10, 10, 15, 12], 'RLRL')).toEqual([14]);
  });
  test('Example 3', () => {
    expect(survivedRobotsHealths([1, 2, 5, 6], [10, 10, 11, 11], 'RLRL')).toEqual([]);
  });
});
