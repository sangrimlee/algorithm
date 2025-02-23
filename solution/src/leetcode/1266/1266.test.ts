import { minTimeToVisitAllPoints } from './1266';

describe('LeetCode 1266', () => {
  test('Example 1', () => {
    expect(
      minTimeToVisitAllPoints([
        [1, 1],
        [3, 4],
        [-1, 0],
      ]),
    ).toBe(7);
  });
  test('Example 2', () => {
    expect(
      minTimeToVisitAllPoints([
        [3, 2],
        [-2, 2],
      ]),
    ).toBe(5);
  });
});
