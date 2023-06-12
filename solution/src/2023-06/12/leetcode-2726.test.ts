import { Calculator } from './leetcode-2726';

describe('2023-06-12: LeetCode 2726', () => {
  test('Example 1', () => {
    const calculator = new Calculator(10);

    expect(calculator.add(5).subtract(7).getResult()).toBe(8);
  });
  test('Example 2', () => {
    const calculator = new Calculator(2);

    expect(calculator.multiply(5).power(2).getResult()).toBe(100);
  });
  test('Example 3', () => {
    const calculator = new Calculator(20);

    expect(() => calculator.divide(0).getResult()).toThrow('Division by zero is not allowed');
  });
});
