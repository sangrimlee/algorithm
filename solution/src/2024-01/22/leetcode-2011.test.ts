import { finalValueAfterOperations } from './leetcode-2011';

describe('2024-01-22: LeetCode 2011', () => {
  test('Example 1', () => {
    expect(finalValueAfterOperations(['--X', 'X++', 'X++'])).toBe(1);
  });
  test('Example 2', () => {
    expect(finalValueAfterOperations(['++X', '++X', 'X++'])).toBe(3);
  });
  test('Example 3', () => {
    expect(finalValueAfterOperations(['X++', '++X', '--X', 'X--'])).toBe(0);
  });
});
