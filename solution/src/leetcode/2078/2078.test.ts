import { maxDistance } from './2078';

describe('LeetCode 2078', () => {
  test('Example 1', () => {
    expect(maxDistance([1, 1, 1, 3, 1, 1, 1])).toBe(3);
  });
  test('Example 2', () => {
    expect(maxDistance([1, 8, 3, 8, 3])).toBe(4);
  });
  test('Example 3', () => {
    expect(maxDistance([0, 1])).toBe(1);
  });
});
