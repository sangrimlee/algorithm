import { addStrings } from './0415';

describe('LeetCode 0415', () => {
  test('Example 1', () => {
    expect(addStrings('11', '123')).toBe('134');
  });
  test('Example 2', () => {
    expect(addStrings('456', '77')).toBe('533');
  });
  test('Example 3', () => {
    expect(addStrings('0', '0')).toBe('0');
  });
  test('Example 4', () => {
    expect(addStrings('999', '999')).toBe('1998');
  });
});
