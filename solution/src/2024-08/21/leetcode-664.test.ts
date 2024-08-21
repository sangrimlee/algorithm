import { strangePrinter } from './leetcode-664';

describe('2024-08-21: LeetCode 664', () => {
  test('Example 1', () => {
    expect(strangePrinter('aaabbb')).toBe(2);
  });
  test('Example 2', () => {
    expect(strangePrinter('aba')).toBe(2);
  });
});
