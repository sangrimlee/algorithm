import { findMissingAndRepeatedValues } from './leetcode-2965';

describe('2024-04-24: LeetCode 2965', () => {
  test('Example 1', () => {
    expect(
      findMissingAndRepeatedValues([
        [1, 3],
        [2, 2],
      ]),
    ).toEqual([2, 4]);
  });
  test('Example 2', () => {
    expect(
      findMissingAndRepeatedValues([
        [9, 1, 7],
        [8, 9, 2],
        [3, 4, 6],
      ]),
    ).toEqual([9, 5]);
  });
});
