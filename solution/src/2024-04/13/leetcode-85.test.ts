import { maximalRectangle } from './leetcode-85';

describe('2024-04-13: LeetCode 85', () => {
  test('Example 1', () => {
    expect(
      maximalRectangle([
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ]),
    ).toBe(6);
  });
  test('Example 2', () => {
    expect(maximalRectangle([['0']])).toBe(0);
  });
  test('Example 3', () => {
    expect(maximalRectangle([['1']])).toBe(1);
  });
});
