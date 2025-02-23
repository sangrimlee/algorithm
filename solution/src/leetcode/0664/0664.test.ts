import { strangePrinter } from './0664';

describe('LeetCode 0664', () => {
  test('Example 1', () => {
    expect(strangePrinter('aaabbb')).toBe(2);
  });
  test('Example 2', () => {
    expect(strangePrinter('aba')).toBe(2);
  });
});
