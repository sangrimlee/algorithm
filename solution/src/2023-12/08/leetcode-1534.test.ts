import { countGoodTriplets } from './leetcode-1534';

describe('2023-12-08: LeetCode 1534', () => {
  test('Example 1', () => {
    expect(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)).toBe(4);
  });
  test('Example 2', () => {
    expect(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)).toBe(0);
  });
});
