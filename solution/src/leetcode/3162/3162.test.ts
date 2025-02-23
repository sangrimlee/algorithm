import { numberOfPairs } from './3162';

describe('LeetCode 3162', () => {
  test('Example 1', () => {
    expect(numberOfPairs([1, 3, 4], [1, 3, 4], 1)).toBe(5);
  });

  test('Example 2', () => {
    expect(numberOfPairs([1, 2, 4, 12], [2, 4], 3)).toBe(2);
  });
});
