import { removeTrailingZeros } from './leetcode-2710';

describe('2024-03-31: LeetCode 2710', () => {
  test('Example 1', () => {
    expect(removeTrailingZeros('51230100')).toBe('512301');
  });
  test('Example 2', () => {
    expect(removeTrailingZeros('123')).toBe('123');
  });
});
