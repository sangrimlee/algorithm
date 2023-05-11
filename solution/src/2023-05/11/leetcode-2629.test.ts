import { compose } from './leetcode-2629';

describe('2023-05-11: LeetCode 2629', () => {
  type F = (x: number) => number;

  test('Example 1', () => {
    const functions: F[] = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
    const x = 4;
    expect(compose(functions)(x)).toBe(65);
  });

  test('Example 2', () => {
    const functions: F[] = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
    const x = 1;
    expect(compose(functions)(x)).toBe(1000);
  });

  test('Example 3', () => {
    const functions: F[] = [];
    const x = 42;
    expect(compose(functions)(x)).toBe(42);
  });
});
