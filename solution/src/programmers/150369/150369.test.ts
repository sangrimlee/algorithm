import { deliveryAndCollect } from './150369';

describe('Programmers 150369', () => {
  test('Example 1', () => {
    expect(deliveryAndCollect(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])).toBe(16);
  });
  test('Example 2', () => {
    expect(deliveryAndCollect(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])).toBe(30);
  });
});
