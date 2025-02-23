import { mincostToHireWorkers } from './0857';

describe('LeetCode 0857', () => {
  test('Example 1', () => {
    expect(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2)).toBeCloseTo(105.0);
  });
  test('Example 2', () => {
    expect(mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3)).toBeCloseTo(30.66667);
  });
});
