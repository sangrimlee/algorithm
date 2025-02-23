import { sortVowels } from './2785';

describe('LeetCode 2785', () => {
  test('Example 1', () => {
    expect(sortVowels('lEetcOde')).toBe('lEOtcede');
  });
  test('Example 2', () => {
    expect(sortVowels('lYmpH')).toBe('lYmpH');
  });
});
