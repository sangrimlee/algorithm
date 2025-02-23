import { fruitSeller } from './135808';

describe('LeetCode 135808', () => {
  test('Example 1', () => {
    expect(fruitSeller(3, 4, [1, 2, 3, 1, 2, 3, 1])).toBe(8);
  });

  test('Example 2', () => {
    expect(fruitSeller(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])).toBe(33);
  });
});
