import { nextGreaterElement } from './leetcode-496';

describe('2023-10-12: LeetCode 496', () => {
  test('Example 1', () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
  });
  test('Example 2', () => {
    expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
  });
});
