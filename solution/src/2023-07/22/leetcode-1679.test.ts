import { maxOperations } from './leetcode-1679';

describe('2023-07-22: LeetCode 1679', () => {
  test('Example 1', () => {
    expect(maxOperations([1, 2, 3, 4], 5)).toEqual(2);
  });
  test('Example 2', () => {
    expect(maxOperations([3, 1, 3, 4, 3], 6)).toEqual(1);
  });
});
