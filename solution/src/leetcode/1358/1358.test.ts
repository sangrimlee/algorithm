import { numberOfSubstrings } from './1358';

describe('LeetCode 1358', () => {
  test('Example 1', () => {
    expect(numberOfSubstrings('abcabc')).toBe(10);
  });
  test('Example 2', () => {
    expect(numberOfSubstrings('aaacb')).toBe(3);
  });
  test('Example 3', () => {
    expect(numberOfSubstrings('abc')).toBe(1);
  });
});
