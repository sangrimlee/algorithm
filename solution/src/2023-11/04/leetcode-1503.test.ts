import { getLastMoment } from './leetcode-1503';

describe('2023-11-04: LeetCode 1503', () => {
  test('Example 1', () => {
    expect(getLastMoment(4, [4, 3], [0, 1])).toBe(4);
  });
  test('Example 2', () => {
    expect(getLastMoment(7, [], [0, 1, 2, 3, 4, 5, 6, 7])).toBe(7);
  });
  test('Example 3', () => {
    expect(getLastMoment(7, [0, 1, 2, 3, 4, 5, 6, 7], [])).toBe(7);
  });
});
