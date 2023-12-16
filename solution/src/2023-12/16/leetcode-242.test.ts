import { isAnagram } from './leetcode-242';

describe('2023-12-16: LeetCode 242', () => {
  test('Example 1', () => {
    expect(isAnagram('anagram', 'nagaram')).toEqual(true);
  });
  test('Example 2', () => {
    expect(isAnagram('rat', 'car')).toEqual(false);
  });
});
