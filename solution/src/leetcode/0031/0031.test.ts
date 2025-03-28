import { nextPermutation } from './0031';

describe('LeetCode 0031', () => {
  test('Example 1', () => {
    const nums = [1, 2, 3];
    nextPermutation(nums);
    expect(nums).toEqual([1, 3, 2]);
  });
  test('Example 2', () => {
    const nums = [3, 2, 1];
    nextPermutation(nums);
    expect(nums).toEqual([1, 2, 3]);
  });
  test('Example 3', () => {
    const nums = [1, 1, 5];
    nextPermutation(nums);
    expect(nums).toEqual([1, 5, 1]);
  });
});
