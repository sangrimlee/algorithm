import { stringSequence } from './3324';

describe('LeetCode 3324', () => {
  test('Example 1', () => {
    expect(stringSequence('abc')).toEqual(['a', 'aa', 'ab', 'aba', 'abb', 'abc']);
  });

  test('Example 2', () => {
    expect(stringSequence('he')).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'ha',
      'hb',
      'hc',
      'hd',
      'he',
    ]);
  });
});
