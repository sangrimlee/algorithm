import { twoSum } from './0167';

describe('LeetCode 0167', () => {
  test('Example 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test('Example 2', () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });

  test('Example 3', () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });
});
