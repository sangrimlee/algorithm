import { myPow } from './0050';

describe('LeetCode 0050', () => {
  test('Example 1', () => {
    expect(myPow(2.0, 10)).toBeCloseTo(1024.0, 5);
  });
  test('Example 2', () => {
    expect(myPow(2.1, 3)).toBeCloseTo(9.261, 4);
  });
  test('Example 3', () => {
    expect(myPow(2.0, -2)).toBeCloseTo(0.25, 3);
  });
});
