import { removeTrailingZeros } from './2710';

describe('LeetCode 2710', () => {
  test('Example 1', () => {
    expect(removeTrailingZeros('51230100')).toBe('512301');
  });
  test('Example 2', () => {
    expect(removeTrailingZeros('123')).toBe('123');
  });
});
