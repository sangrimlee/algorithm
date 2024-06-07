import { replaceWords } from './leetcode-648';

describe('2024-06-07: LeetCode 648', () => {
  test('Example 1', () => {
    expect(replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery')).toBe(
      'the cat was rat by the bat',
    );
  });
  test('Example 2', () => {
    expect(replaceWords(['a', 'b', 'c'], 'aadsfasf absbs bbab cadsfafs')).toBe('a a b c');
  });
  test('Example 3', () => {
    expect(
      replaceWords(['catt', 'cat', 'bat', 'rat'], 'the cattle was rattled by the battery'),
    ).toBe('the cat was rat by the bat');
  });
});
