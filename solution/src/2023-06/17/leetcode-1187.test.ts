import { makeArrayIncreasing } from './leetcode-1187';

describe('2023-06-17: LeetCode 1187', () => {
  test('Example 1', () => {
    expect(makeArrayIncreasing([1, 5, 3, 6, 7], [1, 3, 2, 4])).toEqual(1);
  });
  test('Example 2', () => {
    expect(makeArrayIncreasing([1, 5, 3, 6, 7], [4, 3, 1])).toEqual(2);
  });
  test('Example 3', () => {
    expect(makeArrayIncreasing([1, 5, 3, 6, 7], [1, 6, 3, 3])).toEqual(-1);
  });
});
