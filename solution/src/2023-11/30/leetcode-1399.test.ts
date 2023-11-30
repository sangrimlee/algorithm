import { countLargestGroup } from './leetcode-1399';

describe('2023-11-30: LeetCode 1399', () => {
  test('Example 1', () => {
    expect(countLargestGroup(13)).toBe(4);
  });
  test('Example 2', () => {
    expect(countLargestGroup(2)).toBe(2);
  });
});
