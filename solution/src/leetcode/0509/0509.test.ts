import { fib } from './0509';

describe('LeetCode 0509', () => {
  test('Example 1', () => {
    expect(fib(2)).toBe(1);
  });

  test('Example 2', () => {
    expect(fib(3)).toBe(2);
  });

  test('Example 3', () => {
    expect(fib(4)).toBe(3);
  });

  test('Example 4', () => {
    expect(fib(30)).toBe(832040);
  });
});
