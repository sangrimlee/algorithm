import { curry } from './leetcode-2632';

describe('2023-05-14: LeetCode 2632', () => {
  test('Example 1', () => {
    const sum = (a: number, b: number, c: number) => {
      return a + b + c;
    };
    const curried = curry(sum);
    expect(curried(1)(2)(3)).toBe(6);
  });

  test('Example 2', () => {
    const sum = (a: number, b: number, c: number) => {
      return a + b + c;
    };
    const curried = curry(sum);
    expect(curried(1, 2)(3)).toBe(6);
  });

  test('Example 3', () => {
    const sum = (a: number, b: number, c: number) => {
      return a + b + c;
    };
    const curried = curry(sum);
    expect(curried()()(1, 2, 3)).toBe(6);
  });

  test('Example 4', () => {
    const life = () => {
      return 42;
    };
    const curried = curry(life);
    expect(curried()).toBe(42);
  });
});
