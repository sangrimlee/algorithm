import { matrixScore } from './0861';

describe('LeetCode 0861', () => {
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
