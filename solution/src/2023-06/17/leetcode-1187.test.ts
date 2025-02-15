import { makeArrayIncreasing } from './leetcode-1187';

describe('2023-06-17: LeetCode 1187', () => {
  test('Example 1', () => {
    expect(makeArrayIncreasing([1, 5, 3, 6, 7], [1, 3, 2, 4])).toBe(1);
  });
  test('Example 2', () => {
    expect(makeArrayIncreasing([1, 5, 3, 6, 7], [4, 3, 1])).toBe(2);
  });
  test('Example 3', () => {
    expect(makeArrayIncreasing([1, 5, 3, 6, 7], [1, 6, 3, 3])).toBe(-1);
  });
});
