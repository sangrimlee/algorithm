import { constructDistancedSequence } from './leetcode-1718';

describe('LeetCode 1718', () => {
  test('Example 1', () => {
    expect(constructDistancedSequence(3)).toEqual([3, 1, 2, 3, 2]);
  });
  test('Example 2', () => {
    expect(constructDistancedSequence(5)).toEqual([5, 3, 1, 4, 3, 5, 2, 4, 2]);
  });
  test('Example 3', () => {
    expect(constructDistancedSequence(1)).toEqual([1]);
  });
  test('Example 4', () => {
    expect(constructDistancedSequence(20)).toEqual([
      20, 18, 19, 15, 13, 17, 10, 16, 7, 5, 3, 14, 12, 3, 5, 7, 10, 13, 15, 18, 20, 19, 17, 16, 12,
      14, 11, 9, 4, 6, 8, 2, 4, 2, 1, 6, 9, 11, 8,
    ]);
  });
});
