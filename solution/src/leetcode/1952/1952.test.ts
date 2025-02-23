import { isThree } from './1952';

describe('LeetCode 1952', () => {
  test('Example 1', () => {
    expect(isThree(2)).toBe(false);
  });
  test('Example 2', () => {
    expect(isThree(4)).toBe(true);
  });
});
