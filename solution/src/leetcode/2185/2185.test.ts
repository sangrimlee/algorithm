import { prefixCount } from './2185';

describe('LeetCode 2185', () => {
  test('Example 1', () => {
    expect(prefixCount(['pay', 'attention', 'practice', 'attend'], 'at')).toBe(2);
  });
  test('Example 2', () => {
    expect(prefixCount(['leetcode', 'win', 'loops', 'success'], 'code')).toBe(0);
  });
});
