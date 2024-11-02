import { maxDepthAfterSplit } from './leetcode-1111';

describe('2024-11-02: LeetCode 1111', () => {
  test('Example 1', () => {
    expect(maxDepthAfterSplit('(()())')).toEqual([1, 0, 0, 0, 0, 1]);
  });
  test('Example 2', () => {
    expect(maxDepthAfterSplit('()(())()')).toEqual([1, 1, 1, 0, 0, 1, 1, 1]);
  });
});
