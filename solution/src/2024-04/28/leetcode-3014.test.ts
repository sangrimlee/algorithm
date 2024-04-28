import { minimumPushes } from './leetcode-3014';

describe('2024-04-28: LeetCode 3014', () => {
  test('Example 1', () => {
    expect(minimumPushes('abcde')).toBe(5);
  });
  test('Example 2', () => {
    expect(minimumPushes('xycdefghij')).toBe(12);
  });
});
