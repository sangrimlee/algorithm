import { minFlips } from './3239';

describe('LeetCode 3239', () => {
  test('Example 1', () => {
    expect(
      minFlips([
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 1],
      ]),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(
      minFlips([
        [0, 1],
        [0, 1],
        [0, 0],
      ]),
    ).toBe(1);
  });
  test('Example 3', () => {
    expect(minFlips([[1], [0]])).toBe(0);
  });
});
