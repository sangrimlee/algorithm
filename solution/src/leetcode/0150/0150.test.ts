import { evalRPN } from './0150';

describe('LeetCode 0150', () => {
  test('Example 1', () => {
    const tokens = ['2', '1', '+', '3', '*'];
    expect(evalRPN(tokens)).toBe(9);
  });

  test('Example 2', () => {
    const tokens = ['4', '13', '5', '/', '+'];
    expect(evalRPN(tokens)).toBe(6);
  });

  test('Example 3', () => {
    const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
    expect(evalRPN(tokens)).toBe(22);
  });
});
