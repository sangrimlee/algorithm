import { majorityElement } from './leetcode-229';

describe('2023-10-05: LeetCode 229', () => {
  test('Example 1', () => {
    expect(majorityElement([3, 2, 3])).toEqual([3]);
  });
  test('Example 2', () => {
    expect(majorityElement([1])).toEqual([1]);
  });
  test('Example 3', () => {
    expect(majorityElement([1, 2])).toEqual([1, 2]);
  });
});
