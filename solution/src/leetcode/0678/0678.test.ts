import { checkValidString } from './0678';

describe('LeetCode 0678', () => {
  test('Example 1', () => {
    expect(checkValidString('()')).toBe(true);
  });
  test('Example 2', () => {
    expect(checkValidString('(*)')).toBe(true);
  });
  test('Example 3', () => {
    expect(checkValidString('(*))')).toBe(true);
  });
});
