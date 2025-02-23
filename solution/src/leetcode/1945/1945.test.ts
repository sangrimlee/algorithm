import { getLucky } from './1945';

describe('LeetCode 1945', () => {
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
