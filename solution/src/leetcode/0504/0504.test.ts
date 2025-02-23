import { convertToBase7 } from './0504';

describe('LeetCode 0504', () => {
  test('Example 1', () => {
    expect(convertToBase7(100)).toBe('202');
  });
  test('Example 2', () => {
    expect(convertToBase7(-7)).toBe('-10');
  });
});
