import { countNegatives } from './1351';

describe('LeetCode 1351', () => {
  test('Example 1', () => {
    expect(
      countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
      ]),
    ).toBe(8);
  });
  test('Example 2', () => {
    expect(
      countNegatives([
        [3, 2],
        [1, 0],
      ]),
    ).toBe(0);
  });
});
