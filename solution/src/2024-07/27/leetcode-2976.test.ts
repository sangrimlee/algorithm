import { minimumCost } from './leetcode-2976';

describe('2024-07-27: LeetCode 2976', () => {
  test('Example 1', () => {
    expect(
      minimumCost(
        'abcd',
        'acbe',
        ['a', 'b', 'c', 'c', 'e', 'd'],
        ['b', 'c', 'b', 'e', 'b', 'e'],
        [2, 5, 5, 1, 2, 20],
      ),
    ).toEqual(28);
  });
  test('Example 2', () => {
    expect(minimumCost('aaaa', 'bbbb', ['a', 'c'], ['c', 'b'], [1, 2])).toEqual(12);
  });
  test('Example 3', () => {
    expect(minimumCost('abcd', 'abce', ['a'], ['e'], [10000])).toEqual(-1);
  });
});
