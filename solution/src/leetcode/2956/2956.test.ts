import { findIntersectionValues } from './2956';

describe('LeetCode 2956', () => {
  test('Example 1', () => {
    expect(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])).toEqual([3, 4]);
  });
  test('Example 2', () => {
    expect(findIntersectionValues([3, 4, 2, 3], [1, 5])).toEqual([0, 0]);
  });
});
