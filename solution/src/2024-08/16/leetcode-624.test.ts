import { maxDistance } from './leetcode-624';

describe('2024-08-16: LeetCode 624', () => {
  test('Example 1', () => {
    expect(
      maxDistance([
        [1, 2, 3],
        [4, 5],
        [1, 2, 3],
      ]),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(maxDistance([[1], [1]])).toBe(0);
  });
});
