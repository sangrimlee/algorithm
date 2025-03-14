import { maxProfitII } from './0122';

describe('LeetCode 0122', () => {
  test('Example 1', () => {
    expect(maxProfitII([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  test('Example 2', () => {
    expect(maxProfitII([1, 2, 3, 4, 5])).toBe(4);
  });

  test('Example 3', () => {
    expect(maxProfitII([7, 6, 4, 3, 1])).toBe(0);
  });

  test('Example 4', () => {
    expect(maxProfitII([2, 1, 2, 0, 1])).toBe(2);
  });
});
