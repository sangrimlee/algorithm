import { getHappyString } from './1415';

describe('LeetCode 1415', () => {
  test('Example 1', () => {
    expect(getHappyString(1, 3)).toBe('c');
  });
  test('Example 2', () => {
    expect(getHappyString(1, 4)).toBe('');
  });
  test('Example 3', () => {
    expect(getHappyString(3, 9)).toBe('cab');
  });
});
