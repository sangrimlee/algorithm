import { minimumDiameterAfterMerge } from './leetcode-3203';

describe('2024-12-24: LeetCode 3203', () => {
  test('Example 1', () => {
    expect(
      minimumDiameterAfterMerge(
        [
          [0, 1],
          [0, 2],
          [0, 3],
        ],
        [[0, 1]],
      ),
    ).toBe(3);
  });
  test('Example 2', () => {
    expect(
      minimumDiameterAfterMerge(
        [
          [0, 1],
          [0, 2],
          [0, 3],
          [2, 4],
          [2, 5],
          [3, 6],
          [2, 7],
        ],
        [
          [0, 1],
          [0, 2],
          [0, 3],
          [2, 4],
          [2, 5],
          [3, 6],
          [2, 7],
        ],
      ),
    ).toBe(5);
  });

  test('Example 2', () => {
    expect(
      minimumDiameterAfterMerge(
        [],
        [
          [0, 1],
          [1, 2],
        ],
      ),
    ).toBe(2);
  });
});
