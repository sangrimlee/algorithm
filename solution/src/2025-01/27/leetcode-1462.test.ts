import { checkIfPrerequisite } from './leetcode-1462';

describe('2025-01-27: LeetCode 1462', () => {
  test('Example 1', () => {
    expect(
      checkIfPrerequisite(
        2,
        [[1, 0]],
        [
          [0, 1],
          [1, 0],
        ],
      ),
    ).toEqual([false, true]);
  });
  test('Example 2', () => {
    expect(
      checkIfPrerequisite(
        2,
        [],
        [
          [1, 0],
          [0, 1],
        ],
      ),
    ).toEqual([false, false]);
  });
  test('Example 3', () => {
    expect(
      checkIfPrerequisite(
        3,
        [
          [1, 2],
          [1, 0],
          [2, 0],
        ],
        [
          [1, 0],
          [1, 2],
        ],
      ),
    ).toEqual([true, true]);
  });
});
