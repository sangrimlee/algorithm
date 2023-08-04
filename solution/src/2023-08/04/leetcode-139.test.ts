import { wordBreak } from './leetcode-139';

describe('2023-08-04: LeetCode 139', () => {
  test('Example 1', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
  });
  test('Example 2', () => {
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);
  });
  test('Example 3', () => {
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(false);
  });
});
