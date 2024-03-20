import { leftRightDifference } from './leetcode-2574';

describe('2024-03-20: LeetCode 2574', () => {
  test('Example 1', () => {
    expect(leftRightDifference([10, 4, 8, 3])).toEqual([15, 1, 11, 22]);
  });
  test('Example 2', () => {
    expect(leftRightDifference([1])).toEqual([0]);
  });
});
