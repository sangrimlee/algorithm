import { isOneBitCharacter } from './0717';

describe('LeetCode 0717', () => {
  test('Example 1', () => {
    expect(isOneBitCharacter([1, 0, 0])).toBe(true);
  });
  test('Example 2', () => {
    expect(isOneBitCharacter([1, 1, 1, 0])).toBe(false);
  });
});
