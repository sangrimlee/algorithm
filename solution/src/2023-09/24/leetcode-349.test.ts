import { intersection } from './leetcode-349';

describe('2023-09-24: LeetCode 349', () => {
  test('Example 1', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  });
  test('Example 2', () => {
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
  });
});
