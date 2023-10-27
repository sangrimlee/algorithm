import { numberOfLines } from './leetcode-806';

describe('2023-10-27: LeetCode 806', () => {
  test('Example 1', () => {
    expect(
      numberOfLines(
        [
          10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
          10, 10, 10, 10,
        ],
        'abcdefghijklmnopqrstuvwxyz',
      ),
    ).toEqual([3, 60]);
  });
  test('Example 2', () => {
    expect(
      numberOfLines(
        [
          4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
          10, 10, 10,
        ],
        'bbbcccdddaaa',
      ),
    ).toEqual([2, 4]);
  });
});
