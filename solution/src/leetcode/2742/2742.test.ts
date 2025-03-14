import { paintWalls } from './2742';

describe('LeetCode 2742', () => {
  test('Example 1', () => {
    expect(paintWalls([1, 2, 3, 2], [1, 2, 3, 2])).toBe(3);
  });
  test('Example 2', () => {
    expect(paintWalls([2, 3, 4, 2], [1, 1, 1, 1])).toBe(4);
  });
});
