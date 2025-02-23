import { maximumNumberOfStringPairs } from './2744';

describe('LeetCode 2744', () => {
  test('Example 1', () => {
    expect(maximumNumberOfStringPairs(['cd', 'ac', 'dc', 'ca', 'zz'])).toBe(2);
  });
  test('Example 2', () => {
    expect(maximumNumberOfStringPairs(['ab', 'ba', 'cc'])).toBe(1);
  });
  test('Example 3', () => {
    expect(maximumNumberOfStringPairs(['aa', 'ab'])).toBe(0);
  });
});
