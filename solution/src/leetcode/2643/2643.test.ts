import { rowAndMaximumOnes } from './2643';

describe('LeetCode 2643', () => {
  test('Example 1', () => {
    expect(
      rowAndMaximumOnes([
        [0, 1],
        [1, 0],
      ]),
    ).toEqual([0, 1]);
  });
  test('Example 2', () => {
    expect(
      rowAndMaximumOnes([
        [0, 0, 0],
        [0, 1, 1],
      ]),
    ).toEqual([1, 2]);
  });
  test('Example 3', () => {
    expect(
      rowAndMaximumOnes([
        [0, 0],
        [1, 1],
        [0, 0],
      ]),
    ).toEqual([1, 2]);
  });
});
