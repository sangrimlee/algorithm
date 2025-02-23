import { isAnagram } from './0242';

describe('LeetCode 0242', () => {
  test('Example 1', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });
  test('Example 2', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });
});
