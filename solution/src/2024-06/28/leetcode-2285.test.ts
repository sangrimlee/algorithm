import { maximumImportance } from './leetcode-2285';

describe('2024-06-28: LeetCode 2285', () => {
  test('Example 1', () => {
    expect(
      maximumImportance(5, [
        [0, 1],
        [1, 2],
        [2, 3],
        [0, 2],
        [1, 3],
        [2, 4],
      ]),
    ).toBe(43);
  });
  test('Example 2', () => {
    expect(
      maximumImportance(5, [
        [0, 3],
        [2, 4],
        [1, 3],
      ]),
    ).toBe(20);
  });
});
