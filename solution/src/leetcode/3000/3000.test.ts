import { areaOfMaxDiagonal } from './3000';

describe('LeetCode 3000', () => {
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
