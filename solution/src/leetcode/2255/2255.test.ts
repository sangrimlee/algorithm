import { countPrefixes } from './2255';

describe('LeetCode 2255', () => {
  test('Example 1', () => {
    expect(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc')).toBe(3);
  });
  test('Example 2', () => {
    expect(countPrefixes(['a', 'a'], 'aa')).toBe(2);
  });
});
