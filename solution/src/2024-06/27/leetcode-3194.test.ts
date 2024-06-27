import { minimumAverage } from './leetcode-3194';

describe('2024-06-27: LeetCode 3194', () => {
  test('Example 1', () => {
    expect(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1])).toBeCloseTo(5.5);
  });
  test('Example 2', () => {
    expect(minimumAverage([1, 9, 8, 3, 10, 5])).toBeCloseTo(5.5);
  });
  test('Example 3', () => {
    expect(minimumAverage([1, 2, 3, 7, 8, 9])).toBeCloseTo(5.0);
  });
});
