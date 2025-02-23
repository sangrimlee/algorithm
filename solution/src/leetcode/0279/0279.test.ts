import { numSquares } from './0279';

describe('LeetCode 0279', () => {
  test('Example 1', () => {
    const n = 12;
    expect(numSquares(n)).toBe(3);
  });

  test('Example 2', () => {
    const n = 13;
    expect(numSquares(n)).toBe(2);
  });
});
