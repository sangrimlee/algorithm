import { sortByBits } from './leetcode-1356';

describe('2023-10-30: LeetCode 1356', () => {
  test('Example 1', () => {
    expect(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual([0, 1, 2, 4, 8, 3, 5, 6, 7]);
  });
  test('Example 2', () => {
    expect(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])).toEqual([
      1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024,
    ]);
  });
});
