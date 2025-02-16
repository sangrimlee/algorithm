import { maximumSum } from './leetcode-2342';

describe('LeetCode 2342', () => {
  test('Example 1', () => {
    expect(maximumSum([18, 43, 36, 13, 7])).toBe(54);
  });
  test('Example 2', () => {
    expect(maximumSum([10, 12, 19, 14])).toBe(-1);
  });
});
