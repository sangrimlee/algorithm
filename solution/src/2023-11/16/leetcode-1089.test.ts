import { duplicateZeros } from './leetcode-1089';

describe('2023-11-16: LeetCode 1089', () => {
  test('Example 1', () => {
    const nums = [1, 0, 2, 3, 0, 4, 5, 0];
    duplicateZeros(nums);
    expect(nums).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
  });
  test('Example 2', () => {
    const nums = [1, 2, 3];
    duplicateZeros(nums);
    expect(nums).toEqual([1, 2, 3]);
  });
});
