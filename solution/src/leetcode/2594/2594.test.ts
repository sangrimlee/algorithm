import { repairCars } from './2594';

describe('LeetCode 2594', () => {
  test('Example 1', () => {
    expect(repairCars([4, 2, 3, 1], 10)).toBe(16);
  });
  test('Example 2', () => {
    expect(repairCars([5, 1, 8], 6)).toBe(16);
  });
});
