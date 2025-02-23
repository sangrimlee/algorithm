import { divideCard } from './135807';

describe('LeetCode 135807', () => {
  test('Example 1', () => {
    expect(divideCard([10, 17], [5, 20])).toBe(0);
  });
  test('Example 2', () => {
    expect(divideCard([10, 20], [5, 17])).toBe(10);
  });
  test('Example 3', () => {
    expect(divideCard([14, 35, 119], [18, 30, 102])).toBe(7);
  });
});
