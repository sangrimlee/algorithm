import { isReachableAtTime } from './leetcode-2849';

describe('2023-11-08: LeetCode 2849', () => {
  test('Example 1', () => {
    expect(isReachableAtTime(2, 4, 7, 7, 6)).toBe(true);
  });
  test('Example 2', () => {
    expect(isReachableAtTime(3, 1, 7, 3, 3)).toBe(false);
  });
});
