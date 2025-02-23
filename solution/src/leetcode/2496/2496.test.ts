import { maximumValue } from './2496';

describe('LeetCode 2496', () => {
  test('Example 1', () => {
    expect(maximumValue(['alic3', 'bob', '3', '4', '00000'])).toBe(5);
  });

  test('Example 2', () => {
    expect(maximumValue(['1', '01', '001', '0001'])).toBe(1);
  });
});
