import { maximalSquare } from './leetcode-221';

describe('2024-01-28: LeetCode 221', () => {
  test('Example 1', () => {
    expect(
      maximalSquare([
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ]),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(
      maximalSquare([
        ['0', '1'],
        ['1', '0'],
      ]),
    ).toBe(1);
  });
  test('Example 3', () => {
    expect(maximalSquare([['0']])).toBe(0);
  });
});
