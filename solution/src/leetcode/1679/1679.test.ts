import { maxOperations } from './1679';

describe('LeetCode 1679', () => {
  test('Example 1', () => {
    expect(maxOperations([1, 2, 3, 4], 5)).toBe(2);
  });
  test('Example 2', () => {
    expect(maxOperations([3, 1, 3, 4, 3], 6)).toBe(1);
  });
});
