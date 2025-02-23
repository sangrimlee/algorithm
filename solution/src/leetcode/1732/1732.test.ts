import { largestAltitude } from './1732';

describe('LeetCode 1732', () => {
  test('Example 1', () => {
    expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
  });
  test('Example 2', () => {
    expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
  });
});
