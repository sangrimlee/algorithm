import { shortestCommonSupersequence } from './1092';

describe('LeetCode 1092', () => {
  test('Example 1', () => {
    expect(shortestCommonSupersequence('abac', 'cab')).toBe('cabac');
  });
  test('Example 2', () => {
    expect(shortestCommonSupersequence('aaaaaaaa', 'aaaaaaaa')).toBe('aaaaaaaa');
  });
});
