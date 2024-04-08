import { splitWordsBySeparator } from './leetcode-2788';

describe('2024-04-08: LeetCode 2788', () => {
  test('Example 1', () => {
    expect(splitWordsBySeparator(['one.two.three', 'four.five', 'six'], '.')).toEqual([
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
    ]);
  });
  test('Example 2', () => {
    expect(splitWordsBySeparator(['$easy$', '$problem$'], '$')).toEqual(['easy', 'problem']);
  });
  test('Example 3', () => {
    expect(splitWordsBySeparator(['|||'], '|')).toEqual([]);
  });
});
