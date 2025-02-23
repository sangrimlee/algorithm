import { averageWaitingTime } from './1701';

describe('LeetCode 1701', () => {
  test('Example 1', () => {
    expect(
      averageWaitingTime([
        [1, 2],
        [2, 5],
        [4, 3],
      ]),
    ).toBeCloseTo(5.0);
  });
  test('Example 2', () => {
    expect(
      averageWaitingTime([
        [5, 2],
        [5, 4],
        [10, 3],
        [20, 1],
      ]),
    ).toBeCloseTo(3.25);
  });
});
