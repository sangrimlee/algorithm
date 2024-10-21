import { maxUniqueSplit } from './leetcode-1593';

describe('2024-10-21: LeetCode 1593', () => {
  test('Example 1', () => {
    expect(maxUniqueSplit('ababccc')).toBe(5);
  });
  test('Example 2', () => {
    expect(maxUniqueSplit('aba')).toBe(2);
  });
  test('Example 3', () => {
    expect(maxUniqueSplit('aa')).toBe(1);
  });
});
