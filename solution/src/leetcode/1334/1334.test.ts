import { findTheCity } from './1334';

describe('LeetCode 1334', () => {
  test('Example 1', () => {
    expect(
      findTheCity(
        4,
        [
          [0, 1, 3],
          [1, 2, 1],
          [1, 3, 4],
          [2, 3, 1],
        ],
        4,
      ),
    ).toBe(3);
  });
  test('Example 2', () => {
    expect(
      findTheCity(
        5,
        [
          [0, 1, 2],
          [0, 4, 8],
          [1, 2, 3],
          [1, 4, 2],
          [2, 3, 1],
          [3, 4, 1],
        ],
        2,
      ),
    ).toBe(0);
  });
});
