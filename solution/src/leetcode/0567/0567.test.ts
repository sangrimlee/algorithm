import { checkInclusion } from './0567';

describe('LeetCode 0567', () => {
  test('Example 1', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
  });
  test('Example 2', () => {
    expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
  });
});
