import { licenseKeyFormatting } from './0482';

describe('LeetCode 0482', () => {
  test('Example 1', () => {
    expect(licenseKeyFormatting('5F3Z-2e-9-w', 4)).toBe('5F3Z-2E9W');
  });
  test('Example 2', () => {
    expect(licenseKeyFormatting('2-5g-3-J', 2)).toBe('2-5G-3J');
  });
  test('Example 3', () => {
    expect(licenseKeyFormatting('2-5g-3-JA', 2)).toBe('25-G3-JA');
  });
});
