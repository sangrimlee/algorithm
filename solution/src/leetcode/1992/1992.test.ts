import { findFarmland } from './1992';

describe('LeetCode 1992', () => {
  test('Example 1', () => {
    expect(
      findFarmland([
        [1, 0, 0],
        [0, 1, 1],
        [0, 1, 1],
      ]),
    ).toEqual([
      [0, 0, 0, 0],
      [1, 1, 2, 2],
    ]);
  });
  test('Example 2', () => {
    expect(
      findFarmland([
        [1, 1],
        [1, 1],
      ]),
    ).toEqual([[0, 0, 1, 1]]);
  });
  test('Example 3', () => {
    expect(findFarmland([[0]])).toEqual([]);
  });
});
