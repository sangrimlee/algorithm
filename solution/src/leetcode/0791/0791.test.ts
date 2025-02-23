import { customSortString } from './0791';

describe('LeetCode 0791', () => {
  test('Example 1', () => {
    expect(customSortString('cba', 'abcd')).toBe('cbad');
  });
  test('Example 2', () => {
    expect(customSortString('bcafg', 'abcd')).toBe('bcad');
  });
});
