import { numberOfPowerfulInt } from './2999';

describe('LeetCode 2999', () => {
  test('Example 1', () => {
    expect(numberOfPowerfulInt(1, 6000, 4, '124')).toBe(5);
  });
  test('Example 2', () => {
    expect(numberOfPowerfulInt(15, 215, 6, '10')).toBe(2);
  });
  test('Example 3', () => {
    expect(numberOfPowerfulInt(1000, 2000, 4, '3000')).toBe(0);
  });
});
