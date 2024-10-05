import { checkInclusion } from './leetcode-567';

describe('2024-10-05: LeetCode 567', () => {
  test('Example 1', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
  });
  test('Example 2', () => {
    expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
  });
});
