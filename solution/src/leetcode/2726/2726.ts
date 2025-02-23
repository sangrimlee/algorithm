/* eslint-disable @typescript-eslint/only-throw-error */

/**
 * 2726. Calculator with Method Chaining
 * https://leetcode.com/problems/calculator-with-method-chaining
 */
export class Calculator {
  private value: number;
  constructor(value: number) {
    this.value = value;
  }

  add(value: number): this {
    this.value += value;
    return this;
  }

  subtract(value: number): this {
    this.value -= value;
    return this;
  }

  multiply(value: number): this {
    this.value *= value;
    return this;
  }

  divide(value: number): this {
    if (value === 0) {
      throw 'Division by zero is not allowed';
    }
    this.value /= value;
    return this;
  }

  power(value: number): this {
    this.value **= value;
    return this;
  }

  getResult(): number {
    return this.value;
  }
}
