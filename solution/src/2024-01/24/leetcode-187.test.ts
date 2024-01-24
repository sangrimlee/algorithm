import { findRepeatedDnaSequences } from './leetcode-187';

describe('2024-01-24: LeetCode 187', () => {
  test('Example 1', () => {
    expect(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toEqual([
      'AAAAACCCCC',
      'CCCCCAAAAA',
    ]);
  });
  test('Example 2', () => {
    expect(findRepeatedDnaSequences('AAAAAAAAAAAAA')).toEqual(['AAAAAAAAAA']);
  });
  test('Example 2', () => {
    expect(findRepeatedDnaSequences('AAAAAAAAAAA')).toEqual(['AAAAAAAAAA']);
  });
});
