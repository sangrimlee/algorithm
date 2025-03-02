import { eventualSafeNodes } from './0802';

describe('LeetCode 0802', () => {
  test('Example 1', () => {
    expect(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []])).toEqual([2, 4, 5, 6]);
  });
  test('Example 2', () => {
    expect(eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []])).toEqual([4]);
  });
});
