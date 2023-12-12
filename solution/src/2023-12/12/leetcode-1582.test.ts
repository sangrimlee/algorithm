import { numSpecial } from './leetcode-1582';

describe('2023-12-12: LeetCode 1582', () => {
  test('Example 1', () => {
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(3);
  });
});
