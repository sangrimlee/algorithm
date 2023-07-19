import { eraseOverlapIntervals } from './leetcode-435';

describe('2023-07-19: LeetCode 435', () => {
  test('Example 1', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ]),
    ).toEqual(1);
  });
  test('Example 2', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [1, 2],
        [1, 2],
      ]),
    ).toEqual(2);
  });
  test('Example 3', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
      ]),
    ).toEqual(0);
  });
});
