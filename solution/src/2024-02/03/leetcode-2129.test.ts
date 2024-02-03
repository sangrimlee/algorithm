import { capitalizeTitle } from './leetcode-2129';

describe('2024-02-03: LeetCode 2129', () => {
  test('Example 1', () => {
    expect(capitalizeTitle('capiTalIze tHe titLe')).toBe('Capitalize The Title');
  });
  test('Example 2', () => {
    expect(capitalizeTitle('First leTTeR of EACH Word')).toBe('First Letter of Each Word');
  });
  test('Example 3', () => {
    expect(capitalizeTitle('i lOve leetcode')).toBe('i Love Leetcode');
  });
});
