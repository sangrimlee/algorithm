import { longestObstacleCourseAtEachPosition } from './leetcode-1964';

describe('2023-05-07: LeetCode 1964', () => {
  test('Example 1', () => {
    expect(longestObstacleCourseAtEachPosition([1, 2, 3, 2])).toEqual([1, 2, 3, 3]);
  });
  test('Example 2', () => {
    expect(longestObstacleCourseAtEachPosition([2, 2, 1])).toEqual([1, 2, 1]);
  });
  test('Example 3', () => {
    expect(longestObstacleCourseAtEachPosition([3, 1, 5, 6, 4, 2])).toEqual([1, 1, 2, 3, 2, 2]);
  });
});
