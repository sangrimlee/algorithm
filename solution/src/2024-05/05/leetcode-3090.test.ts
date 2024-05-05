import { maximumLengthSubstring } from './leetcode-3090';

describe('2024-05-05: LeetCode 3090', () => {
  test('Example 1', () => {
    expect(maximumLengthSubstring('bcbbbcba')).toBe(4);
  });
  test('Example 2', () => {
    expect(maximumLengthSubstring('aaaa')).toBe(2);
  });
});
