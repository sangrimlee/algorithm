import { circularGameLosers } from './leetcode-2682';

describe('2024-03-30: LeetCode 2682', () => {
  test('Example 1', () => {
    expect(circularGameLosers(5, 2)).toEqual([4, 5]);
  });
  test('Example 2', () => {
    expect(circularGameLosers(4, 4)).toEqual([2, 3, 4]);
  });
});
