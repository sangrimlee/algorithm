import { mostBooked } from './leetcode-2402';

describe('2024-02-18: LeetCode 2402', () => {
  test('Example 1', () => {
    expect(
      mostBooked(2, [
        [0, 10],
        [1, 5],
        [2, 7],
        [3, 4],
      ]),
    ).toBe(0);
  });
  test('Example 2', () => {
    expect(
      mostBooked(3, [
        [1, 20],
        [2, 10],
        [3, 5],
        [4, 9],
        [6, 8],
      ]),
    ).toBe(1);
  });
});
