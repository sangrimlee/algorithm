import { minOperations } from './1598';

describe('LeetCode 1598', () => {
  test('Example 1', () => {
    expect(minOperations(['d1/', 'd2/', '../', 'd21/', './'])).toBe(2);
  });
  test('Example 2', () => {
    expect(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])).toBe(3);
  });
  test('Example 3', () => {
    expect(minOperations(['d1/', '../', '../', '../'])).toBe(0);
  });
});
