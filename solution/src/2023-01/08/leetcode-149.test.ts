import { maxPoints } from './leetcode-149';

describe('2023-01-08: LeetCode 149', () => {
  test('Example 1', () => {
    const points = [
      [1, 1],
      [2, 2],
      [3, 3],
    ];
    expect(maxPoints(points)).toBe(3);
  });

  test('Example 2', () => {
    const points = [
      [1, 1],
      [3, 2],
      [5, 3],
      [4, 1],
      [2, 3],
      [1, 4],
    ];
    expect(maxPoints(points)).toBe(4);
  });
});
