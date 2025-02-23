import { splitWordsBySeparator } from './2788';

describe('LeetCode 2788', () => {
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
