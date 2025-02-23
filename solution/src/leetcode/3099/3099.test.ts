import { sumOfTheDigitsOfHarshadNumber } from './3099';

describe('LeetCode 3099', () => {
  test('Example 1', () => {
    expect(sumOfTheDigitsOfHarshadNumber(18)).toBe(9);
  });
  test('Example 2', () => {
    expect(sumOfTheDigitsOfHarshadNumber(23)).toBe(-1);
  });
});
