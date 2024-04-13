import { numberOfPoints } from './leetcode-2848';

describe('2024-04-13: LeetCode 2848', () => {
  test('Example 1', () => {
    expect(
      numberOfPoints([
        [3, 6],
        [1, 5],
        [4, 7],
      ]),
    ).toBe(7);
  });
  test('Example 2', () => {
    expect(
      numberOfPoints([
        [1, 3],
        [5, 8],
      ]),
    ).toBe(7);
  });
});
