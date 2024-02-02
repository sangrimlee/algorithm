import { singleNumber } from './leetcode-260';

describe('2024-02-02: LeetCode 260', () => {
  test('Example 1', () => {
    expect(singleNumber([1, 2, 1, 3, 2, 5])).toEqual([3, 5]);
  });
  test('Example 2', () => {
    expect(singleNumber([-1, 0])).toEqual([-1, 0]);
  });
  test('Example 3', () => {
    expect(singleNumber([0, 1])).toEqual([1, 0]);
  });
});
