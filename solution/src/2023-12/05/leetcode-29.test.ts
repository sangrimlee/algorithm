import { divide } from './leetcode-29';

describe('2023-12-05: LeetCode 29', () => {
  test('Example 1', () => {
    expect(divide(10, 3)).toBe(3);
  });
  test('Example 2', () => {
    expect(divide(7, -3)).toEqual(-2);
  });
});
