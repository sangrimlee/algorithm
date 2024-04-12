import { countSymmetricIntegers } from './leetcode-2843';

describe('2024-04-12: LeetCode 2843', () => {
  test('Example 1', () => {
    expect(countSymmetricIntegers(1, 100)).toBe(9);
  });
  test('Example 2', () => {
    expect(countSymmetricIntegers(1200, 1230)).toBe(4);
  });
});
