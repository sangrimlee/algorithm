import { balancedStringSplit } from './leetcode-1221';

describe('2023-11-21: LeetCode 1221', () => {
  test('Example 1', () => {
    expect(balancedStringSplit('RLRRLLRLRL')).toBe(4);
  });
  test('Example 2', () => {
    expect(balancedStringSplit('RLRRRLLRLL')).toBe(2);
  });
  test('Example 3', () => {
    expect(balancedStringSplit('LLLLRRRR')).toBe(1);
  });
});
