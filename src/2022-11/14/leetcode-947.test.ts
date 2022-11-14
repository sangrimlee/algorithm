import { removeStones } from './leetcode-947';

describe('2022-11-14: Leetcode 947', () => {
  test('Example 1', () => {
    const stones = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 2],
      [2, 1],
      [2, 2],
    ];
    expect(removeStones(stones)).toBe(5);
  });

  test('Example 2', () => {
    const stones = [
      [0, 0],
      [0, 2],
      [1, 1],
      [2, 0],
      [2, 2],
    ];
    expect(removeStones(stones)).toBe(3);
  });

  test('Example 3', () => {
    const stones = [[0, 0]];
    expect(removeStones(stones)).toBe(0);
  });

  test('Example 4', () => {
    const stones = [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 3],
      [2, 3],
      [0, 2],
    ];
    expect(removeStones(stones)).toBe(5);
  });
});
