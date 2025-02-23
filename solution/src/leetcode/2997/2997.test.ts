import { minOperations } from './2997';

describe('LeetCode 2997', () => {
  test('Example 1', () => {
    expect(minOperations([2, 1, 3, 4], 1)).toBe(2);
  });
  test('Example 2', () => {
    expect(minOperations([2, 0, 2, 0], 0)).toBe(0);
  });
});
