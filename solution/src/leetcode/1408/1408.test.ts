import { stringMatching } from './1408';

describe('LeetCode 1408', () => {
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
