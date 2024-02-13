import { minBitFlips } from './leetcode-2220';

describe('2024-02-13: LeetCode 2220', () => {
  test('Example 1', () => {
    expect(minBitFlips(10, 7)).toBe(3);
  });
  test('Example 2', () => {
    expect(minBitFlips(3, 4)).toBe(3);
  });
});
