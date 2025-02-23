import { countConsistentStrings } from './1684';

describe('LeetCode 1684', () => {
  test('Example 1', () => {
    expect(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])).toBe(2);
  });
  test('Example 2', () => {
    expect(countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])).toBe(7);
  });
  test('Example 3', () => {
    expect(countConsistentStrings('cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'])).toBe(
      4,
    );
  });
});
