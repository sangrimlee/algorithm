import { largestSubmatrix } from './1727';

describe('LeetCode 1727', () => {
  test('Example 1', () => {
    expect(
      largestSubmatrix([
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
      ]),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(largestSubmatrix([[1, 0, 1, 0, 1]])).toBe(3);
  });
  test('Example 3', () => {
    expect(
      largestSubmatrix([
        [1, 1, 0],
        [1, 0, 1],
      ]),
    ).toBe(2);
  });
});
