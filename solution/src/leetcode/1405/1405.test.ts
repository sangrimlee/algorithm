import { longestDiverseString } from './1405';

describe('LeetCode 1405', () => {
  test('Example 1', () => {
    expect(longestDiverseString(1, 1, 7)).toBe('ccaccbcc');
  });
  test('Example 2', () => {
    expect(longestDiverseString(7, 1, 0)).toBe('aabaa');
  });
});
