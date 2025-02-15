import { MountainArray, findInMountainArray } from './leetcode-1095';

describe('2023-10-12: LeetCode 1095', () => {
  test('Example 1', () => {
    const mountainArr = new MountainArray([1, 2, 3, 4, 5, 3, 1]);
    expect(findInMountainArray(3, mountainArr)).toBe(2);
  });

  test('Example 2', () => {
    const mountainArr = new MountainArray([0, 1, 2, 4, 2, 1]);
    expect(findInMountainArray(3, mountainArr)).toBe(-1);
  });
});
