import { findRepeatedDnaSequences } from './0187';

describe('LeetCode 0187', () => {
  test('Example 1', () => {
    expect(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toEqual([
      'AAAAACCCCC',
      'CCCCCAAAAA',
    ]);
  });
  test('Example 2', () => {
    expect(findRepeatedDnaSequences('AAAAAAAAAAAAA')).toEqual(['AAAAAAAAAA']);
  });
  test('Example 3', () => {
    expect(findRepeatedDnaSequences('AAAAAAAAAAA')).toEqual(['AAAAAAAAAA']);
  });
});
