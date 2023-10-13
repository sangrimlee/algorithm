import { convertToBase7 } from './leetcode-504';

describe('2023-10-13: LeetCode 504', () => {
  test('Example 1', () => {
    expect(convertToBase7(100)).toBe('202');
  });
  test('Example 2', () => {
    expect(convertToBase7(-7)).toBe('-10');
  });
});
