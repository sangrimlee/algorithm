import { numBusesToDestination } from './0815';

describe('LeetCode 0815', () => {
  test('Example 1', () => {
    expect(
      numBusesToDestination(
        [
          [1, 2, 7],
          [3, 6, 7],
        ],
        1,
        6,
      ),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12)).toBe(
      -1,
    );
  });
});
