import { lemonadeChange } from './0860';

describe('LeetCode 0860', () => {
  test('Example 1', () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
  });
  test('Example 2', () => {
    expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false);
  });
  test('Example 3', () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
  });
});
