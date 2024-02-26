import { numberOfPairs } from './leetcode-2341';

describe('2024-02-26: LeetCode 2341', () => {
  test('Example 1', () => {
    expect(numberOfPairs([1, 3, 2, 1, 3, 2, 2])).toEqual([3, 1]);
  });
  test('Example 2', () => {
    expect(numberOfPairs([1, 1])).toEqual([1, 0]);
  });
  test('Example 3', () => {
    expect(numberOfPairs([0])).toEqual([0, 1]);
  });
});
