import { twoSum } from './leetcode-1';

describe('2023-05-16: LeetCode 1', () => {
  test('Example 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('Example 2', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('Example 3', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should throw when there is no solution', () => {
    expect(() => twoSum([3, 3], 5)).toThrow();
  });
});
