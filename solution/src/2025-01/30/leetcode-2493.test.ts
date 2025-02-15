import { magnificentSets } from './leetcode-2493';

describe('2025-01-30: LeetCode 2493', () => {
  test('Example 1', () => {
    expect(
      magnificentSets(6, [
        [1, 2],
        [1, 4],
        [1, 5],
        [2, 6],
        [2, 3],
        [4, 6],
      ]),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(
      magnificentSets(3, [
        [1, 2],
        [2, 3],
        [3, 1],
      ]),
    ).toBe(-1);
  });
});
