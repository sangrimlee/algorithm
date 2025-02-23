import { uniquePathsIII } from './0980';

describe('LeetCode 0980', () => {
  test('Example 1', () => {
    const grid = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 2, -1],
    ];
    expect(uniquePathsIII(grid)).toBe(2);
  });

  test('Example 2', () => {
    const grid = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 2],
    ];
    expect(uniquePathsIII(grid)).toBe(4);
  });

  test('Example 3', () => {
    const grid = [
      [0, 1],
      [2, 0],
    ];
    expect(uniquePathsIII(grid)).toBe(0);
  });
});
