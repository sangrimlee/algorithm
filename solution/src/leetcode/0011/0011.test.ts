import { maxArea } from './0011';

describe('LeetCode 0011', () => {
  test('Example 1', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
  test('Example 2', () => {
    expect(maxArea([1, 1])).toBe(1);
  });
});
