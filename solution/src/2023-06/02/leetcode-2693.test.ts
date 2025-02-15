/* eslint-disable */
import './leetcode-2693';

describe('2023-06-02: LeetCode 2693', () => {
  test('Example 1', () => {
    const fn = function add(b: number) {
      /* @ts-ignore */
      return this.a + b;
    };

    expect(fn.callPolyfill({ a: 5 }, 7)).toBe(12);
  });
  test('Example 2', () => {
    const fn = function tax(price: number, taxRate: number) {
      /* @ts-ignore */
      return `The cost of the ${this.item} is ${price * taxRate}`;
    };

    expect(fn.callPolyfill({ item: 'burger' }, 10, 1, 1)).toBe('The cost of the burger is 10');
  });
});
