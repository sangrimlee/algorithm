import { partition } from './0131';

describe('LeetCode 0131', () => {
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
