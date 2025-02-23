import { incremovableSubarrayCount } from './2970';

describe('LeetCode 2970', () => {
  test('Example 1', () => {
    expect(incremovableSubarrayCount([1, 2, 3, 4])).toBe(10);
  });
  test('Example 2', () => {
    expect(incremovableSubarrayCount([6, 5, 7, 8])).toBe(7);
  });
  test('Example 3', () => {
    expect(incremovableSubarrayCount([8, 7, 6, 6])).toBe(3);
  });
});
