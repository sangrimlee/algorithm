import { fourOperations } from './001843';

describe('LeetCode 001843', () => {
  test('Example 1', () => {
    expect(fourOperations(['1', '-', '3', '+', '5', '-', '8'])).toBe(1);
  });

  test('Example 2', () => {
    expect(fourOperations(['5', '-', '3', '+', '1', '+', '2', '-', '4'])).toBe(3);
  });

  test('Example 3', () => {
    expect(fourOperations(['5', '-', '3', '-', '1', '-', '2', '-', '4'])).toBe(9);
  });
});
