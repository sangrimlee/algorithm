import { minimizedStringLength } from './leetcode-2716';

describe('2024-04-01: LeetCode 2716', () => {
  test('Example 1', () => {
    expect(minimizedStringLength('aaabc')).toBe(3);
  });
  test('Example 2', () => {
    expect(minimizedStringLength('cbbd')).toBe(3);
  });
  test('Example 3', () => {
    expect(minimizedStringLength('dddaaa')).toBe(2);
  });
});
