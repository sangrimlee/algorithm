import { semiOrderedPermutation } from './leetcode-2717';

describe('2024-04-02: LeetCode 2717', () => {
  test('Example 1', () => {
    expect(semiOrderedPermutation([2, 1, 4, 3])).toBe(2);
  });
  test('Example 2', () => {
    expect(semiOrderedPermutation([2, 4, 1, 3])).toBe(3);
  });
  test('Example 3', () => {
    expect(semiOrderedPermutation([1, 3, 4, 2, 5])).toBe(0);
  });
});
