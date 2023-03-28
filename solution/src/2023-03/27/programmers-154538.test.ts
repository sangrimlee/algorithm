import { convertNumbers } from './programmers-154538';

describe('2023-03-27: Programmers 154538', () => {
  test('Example 1', () => {
    expect(convertNumbers(10, 40, 5)).toBe(2);
  });
  test('Example 2', () => {
    expect(convertNumbers(10, 40, 30)).toBe(1);
  });
  test('Example 3', () => {
    expect(convertNumbers(2, 5, 4)).toBe(-1);
  });
});
