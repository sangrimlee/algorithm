import { chalkReplacer } from './leetcode-1894';

describe('2024-09-02: LeetCode 1894', () => {
  test('Example 1', () => {
    expect(chalkReplacer([5, 1, 5], 22)).toBe(0);
  });
  test('Example 2', () => {
    expect(chalkReplacer([3, 4, 1, 2], 25)).toBe(1);
  });
});
