import { getLucky } from './leetcode-1945';

describe('2024-01-14: LeetCode 1945', () => {
  test('Example 1', () => {
    expect(getLucky('iiii', 1)).toBe(36);
  });
  test('Example 2', () => {
    expect(getLucky('leetcode', 2)).toBe(6);
  });
  test('Example 3', () => {
    expect(getLucky('zbax', 2)).toBe(8);
  });
});
