import { surfaceArea } from './leetcode-892';

describe('2023-11-01: LeetCode 892', () => {
  test('Example 1', () => {
    expect(
      surfaceArea([
        [1, 2],
        [3, 4],
      ]),
    ).toBe(34);
  });
  test('Example 2', () => {
    expect(
      surfaceArea([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ]),
    ).toBe(32);
  });
  test('Example 3', () => {
    expect(
      surfaceArea([
        [2, 2, 2],
        [2, 1, 2],
        [2, 2, 2],
      ]),
    ).toBe(46);
  });
});
