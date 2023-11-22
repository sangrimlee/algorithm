import { oddCells } from './leetcode-1252';

describe('2023-11-22: LeetCode 1252', () => {
  test('Example 1', () => {
    expect(
      oddCells(2, 3, [
        [0, 1],
        [1, 1],
      ]),
    ).toBe(6);
  });
  test('Example 2', () => {
    expect(
      oddCells(2, 2, [
        [1, 1],
        [0, 0],
      ]),
    ).toBe(0);
  });
});
