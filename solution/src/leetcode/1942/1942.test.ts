import { smallestChair } from './1942';

describe('LeetCode 1942', () => {
  test('Example 1', () => {
    expect(
      smallestChair(
        [
          [1, 4],
          [2, 3],
          [4, 6],
        ],
        1,
      ),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      smallestChair(
        [
          [3, 10],
          [1, 5],
          [2, 6],
        ],
        0,
      ),
    ).toBe(2);
  });
});
