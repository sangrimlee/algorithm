import { divideString } from './2138';

describe('LeetCode 2138', () => {
  test('Example 1', () => {
    expect(divideString('abcdefghi', 3, 'x')).toEqual(['abc', 'def', 'ghi']);
  });
  test('Example 2', () => {
    expect(divideString('abcdefghij', 3, 'x')).toEqual(['abc', 'def', 'ghi', 'jxx']);
  });
});
