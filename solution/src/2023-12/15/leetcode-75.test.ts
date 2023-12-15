import { sortColors } from './leetcode-75';

describe('2023-12-14: LeetCode 75', () => {
  test('Example 1', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });
  test('Example 2', () => {
    const nums = [2, 0, 1];
    sortColors(nums);
    expect(nums).toEqual([0, 1, 2]);
  });
});
