import { numFactoredBinaryTrees } from './leetcode-823';

describe('2023-10-26: LeetCode 823', () => {
  test('Example 1', () => {
    expect(numFactoredBinaryTrees([2, 4])).toBe(3);
  });
  test('Example 2', () => {
    expect(numFactoredBinaryTrees([2, 4, 5, 10])).toBe(7);
  });
});
