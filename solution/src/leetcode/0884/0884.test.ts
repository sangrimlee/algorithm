import { uncommonFromSentences } from './0884';

describe('LeetCode 0884', () => {
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
