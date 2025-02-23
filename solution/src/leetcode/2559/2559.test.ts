import { vowelStrings } from './2559';

describe('LeetCode 2559', () => {
  test('Example 1', () => {
    expect(
      vowelStrings(
        ['aba', 'bcb', 'ece', 'aa', 'e'],
        [
          [0, 2],
          [1, 4],
          [1, 1],
        ],
      ),
    ).toEqual([2, 3, 0]);
  });
  test('Example 2', () => {
    expect(
      vowelStrings(
        ['a', 'e', 'i'],
        [
          [0, 2],
          [0, 1],
          [2, 2],
        ],
      ),
    ).toEqual([3, 2, 1]);
  });
});
