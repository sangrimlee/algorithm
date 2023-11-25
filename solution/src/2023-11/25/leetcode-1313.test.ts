import { decompressRLElist } from './leetcode-1313';

describe('2023-11-25: LeetCode 1313', () => {
  test('Example 1', () => {
    expect(decompressRLElist([1, 2, 3, 4])).toEqual([2, 4, 4, 4]);
  });
  test('Example 2', () => {
    expect(decompressRLElist([1, 1, 2, 3])).toEqual([1, 3, 3]);
  });
});
