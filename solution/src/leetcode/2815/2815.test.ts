import { maxSum } from './2815';

describe('LeetCode 2815', () => {
  test('Example 1', () => {
    expect(maxSum([51, 71, 17, 24, 42])).toBe(88);
  });
  test('Example 2', () => {
    expect(maxSum([1, 2, 3, 4])).toBe(-1);
  });
});
