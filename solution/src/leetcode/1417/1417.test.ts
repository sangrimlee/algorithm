import { reformat } from './1417';

describe('LeetCode 1417', () => {
  test('Example 1', () => {
    expect(reformat('a0b1c2')).toBe('a0b1c2');
  });
  test('Example 2', () => {
    expect(reformat('leetcode')).toBe('');
  });
  test('Example 3', () => {
    expect(reformat('1229857369')).toBe('');
  });
  test('Example 4', () => {
    expect(reformat('aaa111')).toBe('a1a1a1');
  });
});
