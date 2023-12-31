import { checkIfPangram } from './leetcode-1832';

describe('2023-12-31: LeetCode 1832', () => {
  test('Example 1', () => {
    expect(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')).toBe(true);
  });
  test('Example 2', () => {
    expect(checkIfPangram('leetcode')).toBe(false);
  });
});
