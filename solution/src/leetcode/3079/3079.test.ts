import { sumOfEncryptedInt } from './3079';

describe('LeetCode 3079', () => {
  test('Example 1', () => {
    expect(sumOfEncryptedInt([1, 2, 3])).toBe(6);
  });
  test('Example 2', () => {
    expect(sumOfEncryptedInt([10, 21, 31])).toBe(66);
  });
});
