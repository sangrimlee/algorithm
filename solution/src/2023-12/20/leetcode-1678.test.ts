import { interpret } from './leetcode-1678';

describe('2023-12-20: LeetCode 1678', () => {
  test('Example 1', () => {
    expect(interpret('G()(al)')).toBe('Goal');
  });
  test('Example 2', () => {
    expect(interpret('G()()()()(al)')).toBe('Gooooal');
  });
  test('Example 3', () => {
    expect(interpret('(al)G(al)()()G')).toBe('alGalooG');
  });
});
