import { countTriplets } from './leetcode-1442';

describe('2024-05-27: LeetCode 1442', () => {
  test('Example 1', () => {
    expect(countTriplets([2, 3, 1, 6, 7])).toBe(4);
  });
  test('Example 2', () => {
    expect(countTriplets([1, 1, 1, 1, 1])).toBe(10);
  });
});
