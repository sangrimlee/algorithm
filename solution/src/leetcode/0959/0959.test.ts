import { regionsBySlashes } from './0959';

describe('LeetCode 0959', () => {
  test('Example 1', () => {
    expect(regionsBySlashes([' /', '/ '])).toBe(2);
  });
  test('Example 2', () => {
    expect(regionsBySlashes([' /', '  '])).toBe(1);
  });
  test('Example 3', () => {
    expect(regionsBySlashes(['/\\', '\\/'])).toBe(5);
  });
});
