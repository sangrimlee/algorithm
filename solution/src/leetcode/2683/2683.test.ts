import { doesValidArrayExist } from './2683';

describe('LeetCode 2683', () => {
  test('Example 1', () => {
    expect(doesValidArrayExist([1, 1, 0])).toBe(true);
  });
  test('Example 2', () => {
    expect(doesValidArrayExist([1, 1])).toBe(true);
  });
  test('Example 3', () => {
    expect(doesValidArrayExist([1, 0])).toBe(false);
  });
});
