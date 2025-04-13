import { countGoodNumbers } from './1922';

describe('LeetCode 1922', () => {
  test('Example 1', () => {
    expect(countGoodNumbers(1)).toBe(5);
  });
  test('Example 2', () => {
    expect(countGoodNumbers(4)).toBe(400);
  });
  test('Example 3', () => {
    expect(countGoodNumbers(50)).toBe(564908303);
  });
});
