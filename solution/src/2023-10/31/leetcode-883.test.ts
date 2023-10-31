import { projectionArea } from './leetcode-883';

describe('2023-10-31: LeetCode 883', () => {
  test('Example 1', () => {
    expect(
      projectionArea([
        [1, 2],
        [3, 4],
      ]),
    ).toBe(17);
  });
  test('Example 2', () => {
    expect(projectionArea([[2]])).toBe(5);
  });
  test('Example 3', () => {
    expect(
      projectionArea([
        [1, 0],
        [0, 2],
      ]),
    ).toBe(8);
  });
});
