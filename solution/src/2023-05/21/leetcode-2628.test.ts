import { areDeeplyEqual } from './leetcode-2628';

describe('2023-05-21: LeetCode 2628', () => {
  test('Example 1', () => {
    expect(areDeeplyEqual({ x: 1, y: 2 }, { x: 1, y: 2 })).toEqual(true);
  });
  test('Example 2', () => {
    expect(areDeeplyEqual({ y: 2, x: 1 }, { x: 1, y: 2 })).toEqual(true);
  });
  test('Example 3', () => {
    expect(areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ['1', '2', '3'] })).toEqual(
      false,
    );
  });
  test('Example 4', () => {
    expect(areDeeplyEqual(true, false)).toEqual(false);
  });

  test('Example 4', () => {
    expect(areDeeplyEqual({ nl: null }, { nl: false })).toEqual(false);
  });
});
