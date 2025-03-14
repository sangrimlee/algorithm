import { findRotation } from './1886';

describe('LeetCode 1886', () => {
  test('Example 1', () => {
    expect(
      findRotation(
        [
          [0, 1],
          [1, 0],
        ],
        [
          [1, 0],
          [0, 1],
        ],
      ),
    ).toBe(true);
  });
  test('Example 2', () => {
    expect(
      findRotation(
        [
          [0, 1],
          [1, 1],
        ],
        [
          [1, 0],
          [0, 1],
        ],
      ),
    ).toBe(false);
  });
  test('Example 3', () => {
    expect(
      findRotation(
        [
          [0, 0, 0],
          [0, 1, 0],
          [1, 1, 1],
        ],
        [
          [1, 1, 1],
          [0, 1, 0],
          [0, 0, 0],
        ],
      ),
    ).toBe(true);
  });
});
