import { matrixScore } from './leetcode-861';

describe('2024-05-13: LeetCode 861', () => {
  test('Example 1', () => {
    expect(
      matrixScore([
        [0, 0, 1, 1],
        [1, 0, 1, 0],
        [1, 1, 0, 0],
      ]),
    ).toBe(39);
  });
  test('Example 2', () => {
    expect(matrixScore([[0]])).toBe(1);
  });
});
