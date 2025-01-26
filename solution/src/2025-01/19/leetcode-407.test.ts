import { trapRainWater } from './leetcode-407';

describe('2025-01-19: LeetCode 407', () => {
  test('Example 1', () => {
    expect(
      trapRainWater([
        [1, 4, 3, 1, 3, 2],
        [3, 2, 1, 3, 2, 4],
        [2, 3, 3, 2, 3, 1],
      ]),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(
      trapRainWater([
        [3, 3, 3, 3, 3],
        [3, 2, 2, 2, 3],
        [3, 2, 1, 2, 3],
        [3, 2, 2, 2, 3],
        [3, 3, 3, 3, 3],
      ]),
    ).toBe(10);
  });
});