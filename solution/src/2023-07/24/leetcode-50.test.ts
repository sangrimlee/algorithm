import { myPow } from './leetcode-50';

describe('2023-07-24: LeetCode 50', () => {
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
