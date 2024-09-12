import { reinitializePermutation } from './leetcode-1806';

describe('2024-09-12: LeetCode 1806', () => {
  test('Example 1', () => {
    expect(reinitializePermutation(2)).toBe(1);
  });
  test('Example 2', () => {
    expect(reinitializePermutation(4)).toBe(2);
  });
  test('Example 3', () => {
    expect(reinitializePermutation(6)).toBe(4);
  });
});
