import { aloneAlphabet } from './121683';

describe('Programmers 121683', () => {
  test('Example 1', () => {
    expect(aloneAlphabet('edeaaabbccd')).toBe('de');
  });
  test('Example 2', () => {
    expect(aloneAlphabet('eeddee')).toBe('e');
  });
  test('Example 3', () => {
    expect(aloneAlphabet('string')).toBe('N');
  });
  test('Example 4', () => {
    expect(aloneAlphabet('zbzbz')).toBe('bz');
  });
});
