import { reorderSpaces } from './leetcode-1592';

describe('2023-12-13: LeetCode 1592', () => {
  test('Example 1', () => {
    expect(reorderSpaces('  this   is  a sentence ')).toBe('this   is   a   sentence');
  });
  test('Example 2', () => {
    expect(reorderSpaces(' practice   makes   perfect')).toBe('practice   makes   perfect ');
  });
  test('Example 3', () => {
    expect(reorderSpaces('  hello')).toBe('hello  ');
  });
});
