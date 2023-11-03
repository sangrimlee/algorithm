import { sortArrayByParityII } from './leetcode-922';

describe('2023-11-03: LeetCode 922', () => {
  function isSortedByParity(nums: number[]) {
    return nums.every((num, i) => i % 2 == num % 2);
  }

  test('Example 1', () => {
    expect(isSortedByParity(sortArrayByParityII([4, 2, 5, 7]))).toBeTruthy();
  });
  test('Example 2', () => {
    expect(isSortedByParity(sortArrayByParityII([2, 3]))).toBeTruthy();
  });
  test('Example 3', () => {
    expect(isSortedByParity(sortArrayByParityII([0, 2, 4, 8, 1, 3, 5, 7]))).toBeTruthy();
  });
});
