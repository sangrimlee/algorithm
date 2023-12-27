import { nearestValidPoint } from './leetcode-1779';

describe('2023-12-27: LeetCode 1779', () => {
  test('Example 1', () => {
    expect(
      nearestValidPoint(3, 4, [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4],
      ]),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(nearestValidPoint(3, 4, [[3, 4]])).toBe(0);
  });
  test('Example 3', () => {
    expect(nearestValidPoint(3, 4, [[2, 3]])).toBe(-1);
  });
});
