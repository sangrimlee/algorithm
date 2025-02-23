import { getConcatenation } from './1929';

describe('LeetCode 1929', () => {
  test('Example 1', () => {
    expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
  });
  test('Example 2', () => {
    expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });
});
