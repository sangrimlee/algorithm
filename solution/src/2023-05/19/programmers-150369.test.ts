import { deliveryAndCollect } from './programmers-150369';

describe('2023-05-19: Programmers 150369', () => {
  test('Example 1', () => {
    expect(deliveryAndCollect(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])).toEqual(16);
  });
  test('Example 2', () => {
    expect(deliveryAndCollect(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])).toEqual(30);
  });
});
