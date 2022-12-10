import { removeDuplicates } from './leetcode-26';

describe('2022-11-11: Leetcode 26', () => {
  test('Example 1', () => {
    const nums = [1, 1, 2];
    const removed = [...new Set(nums)];
    expect(removeDuplicates(nums)).toBe(removed.length);
    expect(nums.slice(0, removed.length)).toEqual(removed);
  });

  test('Example 2', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const removed = [...new Set(nums)];
    expect(removeDuplicates(nums)).toBe(removed.length);
    expect(nums.slice(0, removed.length)).toEqual(removed);
  });
});
