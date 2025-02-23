import { isPerfectSquare } from './0367';

describe('LeetCode 0367', () => {
  test('Example 1', () => {
    expect(isPerfectSquare(16)).toBe(true);
  });
  test('Example 2', () => {
    expect(isPerfectSquare(14)).toBe(false);
  });
});
