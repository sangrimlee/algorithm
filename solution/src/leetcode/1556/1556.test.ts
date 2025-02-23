import { thousandSeparator } from './1556';

describe('LeetCode 1556', () => {
  test('Example 1', () => {
    expect(thousandSeparator(987)).toBe('987');
  });
  test('Example 2', () => {
    expect(thousandSeparator(1234)).toBe('1.234');
  });
});
