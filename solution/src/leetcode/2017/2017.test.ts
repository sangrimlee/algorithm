import { gridGame } from './2017';

describe('LeetCode 2017', () => {
  test('Example 1', () => {
    expect(
      gridGame([
        [2, 5, 4],
        [1, 5, 1],
      ]),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(
      gridGame([
        [3, 3, 1],
        [8, 5, 2],
      ]),
    ).toBe(4);
  });
  test('Example 3', () => {
    expect(
      gridGame([
        [1, 3, 1, 15],
        [1, 3, 3, 1],
      ]),
    ).toBe(7);
  });
  test('Example 4', () => {
    expect(
      gridGame([
        [1, 1, 1],
        [1, 1, 1],
      ]),
    ).toBe(1);
  });
});
