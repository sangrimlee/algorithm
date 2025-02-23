import { interpret } from './1678';

describe('LeetCode 1678', () => {
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
