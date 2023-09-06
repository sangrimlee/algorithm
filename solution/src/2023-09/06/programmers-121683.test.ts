import { aloneAlphabet } from './programmers-121683';

describe('2023-09-07: Programmers 121683', () => {
  test('Example 1', () => {
    expect(aloneAlphabet('edeaaabbccd')).toBe('de');
  });
  test('Example 2', () => {
    expect(aloneAlphabet('eeddee')).toEqual('e');
  });
  test('Example 3', () => {
    expect(aloneAlphabet('string')).toEqual('N');
  });
  test('Example 4', () => {
    expect(aloneAlphabet('zbzbz')).toEqual('bz');
  });
});
