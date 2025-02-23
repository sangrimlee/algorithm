import { findColumnWidth } from './2639';

describe('LeetCode 2639', () => {
  test('Example 1', () => {
    expect(findColumnWidth([[1], [22], [333]])).toEqual([3]);
  });
  test('Example 2', () => {
    expect(
      findColumnWidth([
        [-15, 1, 3],
        [15, 7, 12],
        [5, 6, -2],
      ]),
    ).toEqual([3, 1, 2]);
  });
});
