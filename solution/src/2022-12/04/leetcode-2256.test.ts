import { minimumAverageDifference } from './leetcode-2256';

describe('2022-12-04: Leetcode 2256', () => {
  test('Example 1', () => {
    const nums = [2, 5, 3, 9, 5, 3];
    expect(minimumAverageDifference(nums)).toBe(3);
  });

  test('Example 2', () => {
    const nums = [0];
    expect(minimumAverageDifference(nums)).toBe(0);
  });
});
