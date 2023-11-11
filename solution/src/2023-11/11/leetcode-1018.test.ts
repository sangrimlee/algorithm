import { prefixesDivBy5 } from './leetcode-1018';

describe('2023-11-11: LeetCode 1018', () => {
  test('Example 1', () => {
    expect(prefixesDivBy5([0, 1, 1])).toEqual([true, false, false]);
  });
  test('Example 2', () => {
    expect(prefixesDivBy5([1, 1, 1])).toEqual([false, false, false]);
  });
});
