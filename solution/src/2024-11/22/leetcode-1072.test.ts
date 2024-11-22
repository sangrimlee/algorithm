import { maxEqualRowsAfterFlips } from './leetcode-1072';

describe('2024-11-22: LeetCode 1072', () => {
  test('Example 1', () => {
    expect(
      maxEqualRowsAfterFlips([
        [0, 1],
        [1, 1],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(
      maxEqualRowsAfterFlips([
        [0, 1],
        [1, 0],
      ]),
    ).toBe(2);
  });
  test('Example 3', () => {
    expect(
      maxEqualRowsAfterFlips([
        [0, 0, 0],
        [0, 0, 1],
        [1, 1, 0],
      ]),
    ).toBe(2);
  });
  test('Example 4', () => {
    expect(
      maxEqualRowsAfterFlips([
        [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
      ]),
    ).toBe(2);
  });
  test('Example 4', () => {
    expect(maxEqualRowsAfterFlips([[0], [1], [0], [0], [1], [1], [1], [1], [0], [1]])).toBe(10);
  });
});
