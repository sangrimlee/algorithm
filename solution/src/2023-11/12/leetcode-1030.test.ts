import { allCellsDistOrder } from './leetcode-1030';

describe('2023-11-12: LeetCode 1030', () => {
  test('Example 1', () => {
    expect(allCellsDistOrder(1, 2, 0, 0)).toEqual([
      [0, 0],
      [0, 1],
    ]);
  });
  test('Example 2', () => {
    expect(allCellsDistOrder(2, 2, 0, 1)).toEqual([
      [0, 1],
      [0, 0],
      [1, 1],
      [1, 0],
    ]);
  });
  test('Example 3', () => {
    expect(allCellsDistOrder(2, 3, 1, 2)).toEqual([
      [1, 2],
      [0, 2],
      [1, 1],
      [0, 1],
      [1, 0],
      [0, 0],
    ]);
  });
});
