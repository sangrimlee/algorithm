import { peakIndexInMountainArray } from './leetcode-852';

describe('2023-07-25: LeetCode 852', () => {
  test('Example 1', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
  });
  test('Example 2', () => {
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
  });
  test('Example 3', () => {
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1);
  });
});
