import { findAllPeople } from './leetcode-2092';

describe('2024-02-24: LeetCode 2092', () => {
  test('Example 1', () => {
    expect(
      findAllPeople(
        6,
        [
          [1, 2, 5],
          [2, 3, 8],
          [1, 5, 10],
        ],
        1,
      ),
    ).toEqual([0, 1, 2, 3, 5]);
  });
  test('Example 2', () => {
    expect(
      findAllPeople(
        4,
        [
          [3, 1, 3],
          [1, 2, 2],
          [0, 3, 3],
        ],
        3,
      ),
    ).toEqual([0, 1, 3]);
  });
  test('Example 3', () => {
    expect(
      findAllPeople(
        5,
        [
          [3, 4, 2],
          [1, 2, 1],
          [2, 3, 1],
        ],
        1,
      ),
    ).toEqual([0, 1, 2, 3, 4]);
  });
});
