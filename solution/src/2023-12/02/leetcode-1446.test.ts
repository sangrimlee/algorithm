import { maxPower } from './leetcode-1446';

describe('2023-12-02: LeetCode 1446', () => {
  test('Example 1', () => {
    expect(maxPower('leetcode')).toBe(2);
  });
  test('Example 2', () => {
    expect(maxPower('abbcccddddeeeeedcba')).toBe(5);
  });
});
