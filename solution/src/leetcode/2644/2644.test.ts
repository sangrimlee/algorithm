import { maxDivScore } from './2644';

describe('LeetCode 2644', () => {
  test('Example 1', () => {
    expect(maxDivScore([4, 7, 9, 3, 9], [5, 2, 3])).toBe(3);
  });
  test('Example 2', () => {
    expect(maxDivScore([20, 14, 21, 10], [5, 7, 5])).toBe(5);
  });
  test('Example 3', () => {
    expect(maxDivScore([12], [10, 16])).toBe(10);
  });
});
