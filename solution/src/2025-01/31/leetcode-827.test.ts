import { largestIsland } from './leetcode-827';

describe('2025-01-31: LeetCode 827', () => {
  test('Example 1', () => {
    expect(
      largestIsland([
        [1, 0],
        [0, 1],
      ]),
    ).toBe(3);
  });
  test('Example 2', () => {
    expect(
      largestIsland([
        [1, 1],
        [1, 0],
      ]),
    ).toBe(4);
  });
  test('Example 3', () => {
    expect(
      largestIsland([
        [1, 1],
        [1, 1],
      ]),
    ).toBe(4);
  });
});
