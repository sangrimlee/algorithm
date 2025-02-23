import { numberOfLines } from './0806';

describe('LeetCode 0806', () => {
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
