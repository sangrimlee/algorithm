import { minTime } from './1443';

describe('LeetCode 1443', () => {
  test('Example 1', () => {
    const n = 7;
    const edges = [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ];
    const hasApple = [false, false, true, false, true, true, false];
    expect(minTime(n, edges, hasApple)).toBe(8);
  });

  test('Example 2', () => {
    const n = 7;
    const edges = [
      [0, 1],
      [0, 2],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 6],
    ];
    const hasApple = [false, false, true, false, false, true, false];
    expect(minTime(n, edges, hasApple)).toBe(6);
  });
});
