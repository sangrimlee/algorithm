import { replaceWords } from './0648';

describe('LeetCode 0648', () => {
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
