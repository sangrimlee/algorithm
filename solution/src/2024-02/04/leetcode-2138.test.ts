import { divideString } from './leetcode-2138';

describe('2024-02-04: LeetCode 2138', () => {
  test('Example 1', () => {
    expect(divideString('abcdefghi', 3, 'x')).toEqual(['abc', 'def', 'ghi']);
  });
  test('Example 2', () => {
    expect(divideString('abcdefghij', 3, 'x')).toEqual(['abc', 'def', 'ghi', 'jxx']);
  });
});
