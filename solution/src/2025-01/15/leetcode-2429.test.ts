import { minimizeXor } from './leetcode-2429';

describe('2025-01-15: LeetCode 2429', () => {
  test('Example 1', () => {
    expect(minimizeXor(3, 5)).toBe(3);
  });
  test('Example 2', () => {
    expect(minimizeXor(1, 12)).toBe(3);
  });
  test('Example 3', () => {
    expect(minimizeXor(65, 84)).toBe(67);
  });
});