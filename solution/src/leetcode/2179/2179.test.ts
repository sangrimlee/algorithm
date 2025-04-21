import { goodTriplets } from './2179';

describe('LeetCode 2179', () => {
  test('Example 1', () => {
    expect(goodTriplets([2, 0, 1, 3], [0, 1, 2, 3])).toBe(1);
  });
  test('Example 2', () => {
    expect(goodTriplets([4, 0, 1, 3, 2], [4, 1, 0, 2, 3])).toBe(4);
  });
});
