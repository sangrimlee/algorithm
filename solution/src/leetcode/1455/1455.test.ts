import { isPrefixOfWord } from './1455';

describe('LeetCode 1455', () => {
  test('Example 1', () => {
    expect(isPrefixOfWord('i love eating burger', 'burg')).toBe(4);
  });
  test('Example 2', () => {
    expect(isPrefixOfWord('this problem is an easy problem', 'pro')).toBe(2);
  });
  test('Example 3', () => {
    expect(isPrefixOfWord('i am tired', 'you')).toBe(-1);
  });
});
