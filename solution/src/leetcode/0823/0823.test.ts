import { numFactoredBinaryTrees } from './0823';

describe('LeetCode 0823', () => {
  test('Example 1', () => {
    expect(numFactoredBinaryTrees([2, 4])).toBe(3);
  });
  test('Example 2', () => {
    expect(numFactoredBinaryTrees([2, 4, 5, 10])).toBe(7);
  });
});
