import { numRollsToTarget } from './1155';

describe('LeetCode 1155', () => {
  test('Example 1', () => {
    expect(numRollsToTarget(1, 6, 3)).toBe(1);
  });

  test('Example 2', () => {
    expect(numRollsToTarget(2, 6, 7)).toBe(6);
  });

  test('Example 3', () => {
    expect(numRollsToTarget(30, 30, 500)).toBe(222616187);
  });
});
