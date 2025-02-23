import { arrayStringsAreEqual } from './1662';

describe('LeetCode 1662', () => {
  test('Example 1', () => {
    expect(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc'])).toBe(true);
  });
  test('Example 2', () => {
    expect(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c'])).toBe(false);
  });
  test('Example 3', () => {
    expect(arrayStringsAreEqual(['abc', 'd', 'defg'], ['abcddefg'])).toBe(true);
  });
});
