import { largestAltitude } from './leetcode-1732';

describe('2023-06-19: LeetCode 1732', () => {
  test('Example 1', () => {
    expect(largestAltitude([-5, 1, 5, 0, -7])).toEqual(1);
  });
  test('Example 2', () => {
    expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toEqual(0);
  });
});
