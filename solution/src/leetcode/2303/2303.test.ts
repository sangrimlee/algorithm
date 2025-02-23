import { calculateTax } from './2303';

describe('LeetCode 2303', () => {
  test('Example 1', () => {
    expect(
      calculateTax(
        [
          [3, 50],
          [7, 10],
          [12, 25],
        ],
        10,
      ),
    ).toBeCloseTo(2.65);
  });
  test('Example 2', () => {
    expect(
      calculateTax(
        [
          [1, 0],
          [4, 25],
          [5, 50],
        ],
        2,
      ),
    ).toBeCloseTo(0.25);
  });
  test('Example 3', () => {
    expect(calculateTax([[2, 50]], 0)).toBeCloseTo(0.0);
  });
});
