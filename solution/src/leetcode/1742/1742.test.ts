import { countBalls } from './1742';

describe('LeetCode 1742', () => {
  test('Example 1', () => {
    expect(countBalls(1, 10)).toBe(2);
  });
  test('Example 2', () => {
    expect(countBalls(5, 15)).toBe(2);
  });
  test('Example 3', () => {
    expect(countBalls(19, 28)).toBe(2);
  });
});
