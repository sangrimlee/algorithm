import { wordPattern } from './0290';

describe('LeetCode 0290', () => {
  test('Example 1', () => {
    const pattern = 'abba',
      s = 'dog cat cat dog';
    expect(wordPattern(pattern, s)).toBeTruthy();
  });

  test('Example 2', () => {
    const pattern = 'abba',
      s = 'dog cat cat fish';
    expect(wordPattern(pattern, s)).toBeFalsy();
  });

  test('Example 3', () => {
    const pattern = 'aaaa',
      s = 'dog cat cat dog';
    expect(wordPattern(pattern, s)).toBeFalsy();
  });
});
