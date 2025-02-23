import { findLeastNumOfUniqueInts } from './1481';

describe('LeetCode 1481', () => {
  test('Example 1', () => {
    expect(findLeastNumOfUniqueInts([5, 5, 4], 1)).toBe(1);
  });
  test('Example 2', () => {
    expect(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)).toBe(2);
  });
});
