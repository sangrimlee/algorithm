import { generateKey } from './leetcode-3270';

describe('2024-09-03: LeetCode 3270', () => {
  test('Example 1', () => {
    expect(generateKey(1, 10, 1000)).toBe(0);
  });
  test('Example 2', () => {
    expect(generateKey(987, 879, 798)).toBe(777);
  });
  test('Example 3', () => {
    expect(generateKey(1, 2, 3)).toBe(1);
  });
});
