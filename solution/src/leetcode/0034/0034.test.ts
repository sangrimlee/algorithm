import { searchRange } from './0034';

describe('LeetCode 0034', () => {
  test('Example 1', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
  });
  test('Example 2', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });
  test('Example 3', () => {
    expect(searchRange([], 0)).toEqual([-1, -1]);
  });
});
