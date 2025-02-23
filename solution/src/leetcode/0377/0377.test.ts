import { combinationSum4 } from './0377';

describe('LeetCode 0377', () => {
  test('Example 1', () => {
    expect(combinationSum4([1, 2, 3], 4)).toBe(7);
  });
  test('Example 2', () => {
    expect(combinationSum4([9], 3)).toBe(0);
  });
});
