import { areDeeplyEqual } from './2628';

describe('LeetCode 2628', () => {
  test('Example 1', () => {
    expect(areDeeplyEqual({ x: 1, y: 2 }, { x: 1, y: 2 })).toBe(true);
  });
  test('Example 2', () => {
    expect(areDeeplyEqual({ y: 2, x: 1 }, { x: 1, y: 2 })).toBe(true);
  });
  test('Example 3', () => {
    expect(areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ['1', '2', '3'] })).toBe(false);
  });
  test('Example 4', () => {
    expect(areDeeplyEqual(true, false)).toBe(false);
  });

  test('Example 5', () => {
    expect(areDeeplyEqual({ nl: null }, { nl: false })).toBe(false);
  });
});
