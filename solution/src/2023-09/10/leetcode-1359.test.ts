import { countOrders } from './leetcode-1359';

describe('2023-09-10: LeetCode 1359', () => {
  test('Example 1', () => {
    expect(countOrders(1)).toEqual(1);
  });
  test('Example 2', () => {
    expect(countOrders(2)).toEqual(6);
  });
  test('Example 3', () => {
    expect(countOrders(3)).toEqual(90);
  });
  test('Example 4', () => {
    expect(countOrders(500)).toBe(764678010);
  });
});
