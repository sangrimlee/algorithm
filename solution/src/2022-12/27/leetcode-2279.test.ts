import { maximumBags } from './leetcode-2279';

describe('2022-12-27: LeetCode 2279', () => {
  test('Example 1', () => {
    const capacity = [2, 3, 4, 5],
      rocks = [1, 2, 4, 4],
      additionalRocks = 2;
    expect(maximumBags(capacity, rocks, additionalRocks)).toBe(3);
  });

  test('Example 2', () => {
    const capacity = [10, 2, 2],
      rocks = [2, 2, 0],
      additionalRocks = 100;
    expect(maximumBags(capacity, rocks, additionalRocks)).toBe(3);
  });
});
