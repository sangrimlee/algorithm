import { findCheapestPrice } from './leetcode-787';

describe('2023-01-26: Leetcode 787', () => {
  test('Example 1', () => {
    const n = 4,
      flights = [
        [0, 1, 100],
        [1, 2, 100],
        [2, 0, 100],
        [1, 3, 600],
        [2, 3, 200],
      ],
      src = 0,
      dst = 3,
      k = 1;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(700);
  });

  test('Example 2', () => {
    const n = 3,
      flights = [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      src = 0,
      dst = 2,
      k = 1;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(200);
  });

  test('Example 3', () => {
    const n = 3,
      flights = [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      src = 0,
      dst = 2,
      k = 0;
    expect(findCheapestPrice(n, flights, src, dst, k)).toBe(500);
  });
});
