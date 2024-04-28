import { countKeyChanges } from './leetcode-3019';

describe('2024-04-28: LeetCode 3019', () => {
  test('Example 1', () => {
    expect(countKeyChanges('aAbBcC')).toBe(2);
  });
  test('Example 2', () => {
    expect(countKeyChanges('AaAaAaaA')).toBe(0);
  });
});
