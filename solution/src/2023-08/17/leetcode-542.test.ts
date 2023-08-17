import { updateMatrix } from './leetcode-542';

describe('2023-08-17: LeetCode 542', () => {
  test('Example 1', () => {
    expect(
      updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]),
    ).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });
  test('Example 2', () => {
    expect(
      updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ]),
    ).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ]);
  });
});
