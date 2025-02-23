import { countOrders } from './1359';

describe('LeetCode 1359', () => {
  test('Example 1', () => {
    expect(countOrders(1)).toBe(1);
  });
  test('Example 2', () => {
    expect(countOrders(2)).toBe(6);
  });
  test('Example 3', () => {
    expect(countOrders(3)).toBe(90);
  });
  test('Example 4', () => {
    expect(countOrders(500)).toBe(764678010);
  });
});
