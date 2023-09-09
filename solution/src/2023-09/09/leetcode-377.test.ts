import { combinationSum4 } from './leetcode-377';

describe('2023-09-09: LeetCode 377', () => {
  test('Example 1', () => {
    expect(combinationSum4([1, 2, 3], 4)).toBe(7);
  });
  test('Example 2', () => {
    expect(combinationSum4([9], 3)).toBe(0);
  });
});
