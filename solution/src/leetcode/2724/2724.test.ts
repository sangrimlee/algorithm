import { sortBy } from './2724';

describe('LeetCode 2724', () => {
  test('Example 1', () => {
    expect(sortBy([5, 4, 1, 2, 3], (x) => x)).toEqual([1, 2, 3, 4, 5]);
  });
  test('Example 2', () => {
    expect(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x)).toEqual([
      { x: -1 },
      { x: 0 },
      { x: 1 },
    ]);
  });
  test('Example 3', () => {
    expect(
      sortBy(
        [
          [3, 4],
          [5, 2],
          [10, 1],
        ],
        (x) => x[1],
      ),
    ).toEqual([
      [10, 1],
      [5, 2],
      [3, 4],
    ]);
  });
});
