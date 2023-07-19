import { maxArea } from './leetcode-11';

describe('2023-07-19: LeetCode 11', () => {
  test('Example 1', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });
  test('Example 2', () => {
    expect(maxArea([1, 1])).toEqual(1);
  });
});
