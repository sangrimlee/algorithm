import { maximalSquare } from './0221';

describe('LeetCode 0221', () => {
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
