import { moveZeroes } from './leetcode-283';

describe('2023-07-17: LeetCode 283', () => {
  test('Example 1', () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });
  test('Example 2', () => {
    const nums = [0];
    moveZeroes(nums);
    expect(nums).toEqual([0]);
  });
});
