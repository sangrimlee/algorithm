import { wordBreak } from './0140';

describe('LeetCode 0140', () => {
  test('Example 1', () => {
    expect(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog'])).toEqual([
      'cat sand dog',
      'cats and dog',
    ]);
  });
  test('Example 2', () => {
    expect(
      wordBreak('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']),
    ).toEqual(['pine apple pen apple', 'pine applepen apple', 'pineapple pen apple']);
  });
  test('Example 3', () => {
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toEqual([]);
  });
});
