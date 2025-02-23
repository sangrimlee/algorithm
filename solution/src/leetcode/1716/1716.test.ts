import { totalMoney } from './1716';

describe('LeetCode 1716', () => {
  test('Example 1', () => {
    expect(totalMoney(4)).toBe(10);
  });
  test('Example 2', () => {
    expect(totalMoney(10)).toBe(37);
  });
  test('Example 3', () => {
    expect(totalMoney(20)).toBe(96);
  });
});
