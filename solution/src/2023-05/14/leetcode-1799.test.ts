import { maxScore } from './leetcode-1799';

describe('2023-05-14: LeetCode 1799', () => {
  test('Example 1', () => {
    expect(maxScore([1, 2])).toEqual(1);
  });
  test('Example 2', () => {
    expect(maxScore([3, 4, 6, 8])).toEqual(11);
  });
  test('Example 3', () => {
    expect(maxScore([1, 2, 3, 4, 5, 6])).toEqual(14);
  });
});
