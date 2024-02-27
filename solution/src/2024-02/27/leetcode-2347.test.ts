import { bestHand } from './leetcode-2347';

describe('2024-02-27: LeetCode 2347', () => {
  test('Example 1', () => {
    expect(bestHand([13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a'])).toBe('Flush');
  });
  test('Example 2', () => {
    expect(bestHand([4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c'])).toBe('Three of a Kind');
  });
  test('Example 3', () => {
    expect(bestHand([10, 10, 2, 12, 9], ['a', 'b', 'c', 'a', 'd'])).toBe('Pair');
  });
});
