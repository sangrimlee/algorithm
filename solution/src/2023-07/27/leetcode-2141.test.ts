import { maxRunTime } from './leetcode-2141';

describe('2023-07-27: LeetCode 2141', () => {
  test('Example 1', () => {
    expect(maxRunTime(2, [3, 3, 3])).toBe(4);
  });
  test('Example 2', () => {
    expect(maxRunTime(2, [1, 1, 1, 1])).toBe(2);
  });
});
