import { peakIndexInMountainArray } from './0852';

describe('LeetCode 0852', () => {
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
