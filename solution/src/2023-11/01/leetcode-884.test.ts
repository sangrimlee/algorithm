import { uncommonFromSentences } from './leetcode-884';

describe('2023-11-01: LeetCode 884', () => {
  test('Example 1', () => {
    expect(uncommonFromSentences('this apple is sweet', 'this apple is sour')).toEqual([
      'sweet',
      'sour',
    ]);
  });
  test('Example 2', () => {
    expect(uncommonFromSentences('apple apple', 'banana')).toEqual(['banana']);
  });
});
