import { triangleType } from './3024';

describe('LeetCode 3024', () => {
  test('Example 1', () => {
    expect(triangleType([3, 3, 3])).toBe('equilateral');
  });
  test('Example 2', () => {
    expect(triangleType([3, 4, 5])).toBe('scalene');
  });
});
