import { shortestBridge } from './leetcode-934';

describe('2023-05-21: LeetCode 934', () => {
  test('Example 1', () => {
    expect(
      shortestBridge([
        [0, 1],
        [1, 0],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      shortestBridge([
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 1],
      ]),
    ).toBe(2);
  });
  test('Example 3', () => {
    expect(
      shortestBridge([
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ]),
    ).toBe(1);
  });
});
