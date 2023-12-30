import { squareIsWhite } from './leetcode-1812';

describe('2023-12-30: LeetCode 1812', () => {
  test('Example 1', () => {
    expect(squareIsWhite('a1')).toBe(false);
  });
  test('Example 2', () => {
    expect(squareIsWhite('h3')).toBe(true);
  });
  test('Example 3', () => {
    expect(squareIsWhite('c7')).toBe(false);
  });
});
