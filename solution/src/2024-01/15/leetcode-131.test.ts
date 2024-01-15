import { partition } from './leetcode-131';

describe('2024-01-15: LeetCode 131', () => {
  test('Example 1', () => {
    expect(partition('aab')).toEqual([
      ['a', 'a', 'b'],
      ['aa', 'b'],
    ]);
  });
  test('Example 2', () => {
    expect(partition('a')).toEqual([['a']]);
  });
});
