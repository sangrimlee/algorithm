import { fullBloomFlowers } from './2251';

describe('LeetCode 2251', () => {
  test('Example 1', () => {
    expect(
      fullBloomFlowers(
        [
          [1, 6],
          [3, 7],
          [9, 12],
          [4, 13],
        ],
        [2, 3, 7, 11],
      ),
    ).toEqual([1, 2, 2, 2]);
  });
  test('Example 2', () => {
    expect(
      fullBloomFlowers(
        [
          [1, 10],
          [3, 3],
        ],
        [3, 3, 2],
      ),
    ).toEqual([2, 2, 1]);
  });
});
