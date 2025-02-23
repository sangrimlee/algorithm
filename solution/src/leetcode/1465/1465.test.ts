import { maxArea } from './1465';

describe('LeetCode 1465', () => {
  test('Example 1', () => {
    expect(maxArea(5, 4, [1, 2, 4], [1, 3])).toBe(4);
  });

  test('Example 2', () => {
    expect(maxArea(5, 4, [3, 1], [1])).toBe(6);
  });

  test('Example 3', () => {
    expect(maxArea(5, 4, [3], [3])).toBe(9);
  });

  test('Example 4', () => {
    expect(maxArea(1000000000, 1000000000, [2], [2])).toBe(81);
  });
});
