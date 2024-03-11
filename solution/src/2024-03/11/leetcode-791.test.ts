import { customSortString } from './leetcode-791';

describe('2024-03-11: LeetCode 791', () => {
  test('Example 1', () => {
    expect(customSortString('cba', 'abcd')).toBe('cbad');
  });
  test('Example 2', () => {
    expect(customSortString('bcafg', 'abcd')).toBe('bcad');
  });
});
