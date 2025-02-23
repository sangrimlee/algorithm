import { maximumBeauty } from './2070';

describe('LeetCode 2070', () => {
  test('Example 1', () => {
    expect(
      maximumBeauty(
        [
          [1, 2],
          [3, 2],
          [2, 4],
          [5, 6],
          [3, 5],
        ],
        [1, 2, 3, 4, 5, 6],
      ),
    ).toEqual([2, 4, 5, 5, 6, 6]);
  });
  test('Example 2', () => {
    expect(
      maximumBeauty(
        [
          [1, 2],
          [1, 2],
          [1, 3],
          [1, 4],
        ],
        [1],
      ),
    ).toEqual([4]);
  });
  test('Example 3', () => {
    expect(maximumBeauty([[10, 1000]], [5])).toEqual([0]);
  });
});
