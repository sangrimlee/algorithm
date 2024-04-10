import { deckRevealedIncreasing } from './leetcode-950';

describe('2024-04-10: LeetCode 950', () => {
  test('Example 1', () => {
    expect(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])).toEqual([2, 13, 3, 11, 5, 17, 7]);
  });
  test('Example 2', () => {
    expect(deckRevealedIncreasing([1, 1000])).toEqual([1, 1000]);
  });
});
