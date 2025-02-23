import { maxSum } from './2428';

describe('LeetCode 2428', () => {
  test('Example 1', () => {
    expect(
      maxSum([
        [6, 2, 1, 3],
        [4, 2, 1, 5],
        [9, 2, 8, 7],
        [4, 1, 2, 9],
      ]),
    ).toBe(30);
  });
  test('Example 2', () => {
    expect(
      maxSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toBe(35);
  });
});
