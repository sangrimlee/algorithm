import { maxUniqueSplit } from './1593';

describe('LeetCode 1593', () => {
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
