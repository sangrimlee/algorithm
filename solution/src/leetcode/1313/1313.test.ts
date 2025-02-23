import { decompressRLElist } from './1313';

describe('LeetCode 1313', () => {
  test('Example 1', () => {
    expect(decompressRLElist([1, 2, 3, 4])).toEqual([2, 4, 4, 4]);
  });
  test('Example 2', () => {
    expect(decompressRLElist([1, 1, 2, 3])).toEqual([1, 3, 3]);
  });
});
