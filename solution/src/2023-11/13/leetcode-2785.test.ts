import { sortVowels } from './leetcode-2785';

describe('2023-11-13: LeetCode 2785', () => {
  test('Example 1', () => {
    expect(sortVowels('lEetcOde')).toBe('lEOtcede');
  });
  test('Example 2', () => {
    expect(sortVowels('lYmpH')).toBe('lYmpH');
  });
});
