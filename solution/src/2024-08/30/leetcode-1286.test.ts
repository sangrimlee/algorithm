import { CombinationIterator } from './leetcode-1286';

describe('2024-08-30: LeetCode 1286', () => {
  test('Example 1', () => {
    const itr = new CombinationIterator('abc', 2);
    expect(itr.next()).toBe('ab');
    expect(itr.hasNext()).toBe(true);
    expect(itr.next()).toBe('ac');
    expect(itr.hasNext()).toBe(true);
    expect(itr.next()).toBe('bc');
    expect(itr.hasNext()).toBe(false);
  });
});
