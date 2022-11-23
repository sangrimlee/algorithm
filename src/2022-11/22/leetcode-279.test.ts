import { numSquares } from './leetcode-279';

describe('2022-11-22: Leetcode 279', () => {
  test('Example 1', () => {
    const n = 12;
    expect(numSquares(n)).toBe(3);
  });

  test('Example 2', () => {
    const n = 13;
    expect(numSquares(n)).toBe(2);
  });
});
