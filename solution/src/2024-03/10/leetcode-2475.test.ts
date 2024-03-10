import { unequalTriplets } from './leetcode-2475';

describe('2024-03-10: LeetCode 2475', () => {
  test('Example 1', () => {
    expect(unequalTriplets([4, 4, 2, 4, 3])).toBe(3);
  });
  test('Example 2', () => {
    expect(unequalTriplets([1, 1, 1, 1, 1])).toBe(0);
  });
});
