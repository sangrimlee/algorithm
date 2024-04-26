import { areaOfMaxDiagonal } from './leetcode-3000';

describe('2024-04-26: LeetCode 3000', () => {
  test('Example 1', () => {
    expect(
      areaOfMaxDiagonal([
        [9, 3],
        [8, 6],
      ]),
    ).toBe(48);
  });
  test('Example 2', () => {
    expect(
      areaOfMaxDiagonal([
        [3, 4],
        [4, 3],
      ]),
    ).toBe(12);
  });
});
