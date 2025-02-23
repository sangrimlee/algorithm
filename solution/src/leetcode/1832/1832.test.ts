import { checkIfPangram } from './1832';

describe('LeetCode 1832', () => {
  test('Example 1', () => {
    expect(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')).toBe(true);
  });
  test('Example 2', () => {
    expect(checkIfPangram('leetcode')).toBe(false);
  });
});
