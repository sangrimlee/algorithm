import { getConcatenation } from './leetcode-1929';

describe('2024-01-12: LeetCode 1929', () => {
  test('Example 1', () => {
    expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
  });
  test('Example 2', () => {
    expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });
});
