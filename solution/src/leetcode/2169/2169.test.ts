import { countOperations } from './2169';

describe('LeetCode 2169', () => {
  test('Example 1', () => {
    expect(countOperations(2, 3)).toBe(3);
  });
  test('Example 2', () => {
    expect(countOperations(10, 10)).toBe(1);
  });
});
