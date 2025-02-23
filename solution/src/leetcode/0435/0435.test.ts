import { eraseOverlapIntervals } from './0435';

describe('LeetCode 0435', () => {
  test('Example 1', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [1, 2],
        [1, 2],
      ]),
    ).toBe(2);
  });
  test('Example 3', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
      ]),
    ).toBe(0);
  });
});
