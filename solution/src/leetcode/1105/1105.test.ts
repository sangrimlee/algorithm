import { minHeightShelves } from './1105';

describe('LeetCode 1105', () => {
  test('Example 1', () => {
    expect(
      minHeightShelves(
        [
          [1, 1],
          [2, 3],
          [2, 3],
          [1, 1],
          [1, 1],
          [1, 1],
          [1, 2],
        ],
        4,
      ),
    ).toBe(6);
  });
  test('Example 2', () => {
    expect(
      minHeightShelves(
        [
          [1, 3],
          [2, 4],
          [3, 2],
        ],
        6,
      ),
    ).toBe(4);
  });
});
