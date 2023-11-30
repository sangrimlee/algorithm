import { stringMatching } from './leetcode-1408';

describe('2023-11-30: LeetCode 1408', () => {
  test('Example 1', () => {
    expect(stringMatching(['mass', 'as', 'hero', 'superhero'])).toEqual(['as', 'hero']);
  });
  test('Example 2', () => {
    expect(stringMatching(['leetcode', 'et', 'code'])).toEqual(['et', 'code']);
  });
  test('Example 3', () => {
    expect(stringMatching(['blue', 'green', 'bu'])).toEqual([]);
  });
});
