import { numIdenticalPairs } from './leetcode-1512';

describe('2023-10-03: LeetCode 1512', () => {
  test('Example 1', () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toEqual(4);
  });
  test('Example 2', () => {
    expect(numIdenticalPairs([1, 1, 1, 1])).toEqual(6);
  });
  test('Example 3', () => {
    expect(numIdenticalPairs([1, 2, 3])).toEqual(0);
  });
});
