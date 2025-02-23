import { wordBreak } from './0139';

describe('LeetCode 0139', () => {
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
