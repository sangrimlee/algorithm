import { isValid } from './3136';

describe('LeetCode 3136', () => {
  test('Example 1', () => {
    expect(isValid('234Adas')).toBe(true);
  });
  test('Example 2', () => {
    expect(isValid('b3')).toBe(false);
  });
  test('Example 3', () => {
    expect(isValid('a3$e')).toBe(false);
  });
});
