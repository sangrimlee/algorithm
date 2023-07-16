import { compress } from './leetcode-443';

describe('2023-07-15: LeetCode 443', () => {
  test('Example 1', () => {
    const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
    expect(compress(chars)).toBe(6);
    expect(chars).toEqual(['a', '2', 'b', '2', 'c', '3']);
  });
  test('Example 2', () => {
    const chars = ['a'];
    expect(compress(chars)).toBe(1);
    expect(chars).toEqual(['a']);
  });
  test('Example 3', () => {
    const chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
    expect(compress(chars)).toBe(4);
    expect(chars).toEqual(['a', 'b', '1', '2']);
  });
});
