import { minNumber } from './leetcode-2605';

describe('2024-03-24: LeetCode 2605', () => {
  test('Example 1', () => {
    expect(minNumber([4, 1, 3], [5, 7])).toBe(15);
  });
  test('Example 2', () => {
    expect(minNumber([3, 5, 2, 6], [3, 1, 7])).toBe(3);
  });
});
