import { isGood } from './leetcode-2784';

describe('2024-04-07: LeetCode 2784', () => {
  test('Example 1', () => {
    expect(isGood([2, 1, 3])).toBe(false);
  });
  test('Example 2', () => {
    expect(isGood([1, 3, 3, 2])).toBe(true);
  });
  test('Example 3', () => {
    expect(isGood([1, 1])).toBe(true);
  });
  test('Example 4', () => {
    expect(isGood([3, 4, 4, 1, 2, 1])).toBe(false);
  });
});
