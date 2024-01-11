import { buildArray } from './leetcode-1920';

describe('2024-01-11: LeetCode 1920', () => {
  test('Example 1', () => {
    expect(buildArray([0, 2, 1, 5, 3, 4])).toEqual([0, 1, 2, 4, 5, 3]);
  });
  test('Example 2', () => {
    expect(buildArray([5, 0, 1, 2, 3, 4])).toEqual([4, 5, 0, 1, 2, 3]);
  });
});
