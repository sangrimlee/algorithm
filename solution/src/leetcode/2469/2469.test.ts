import { convertTemperature } from './2469';

describe('LeetCode 2469', () => {
  test('Example 1', () => {
    expect(convertTemperature(36.5)).toEqual([309.65, 97.7]);
  });
  test('Example 2', () => {
    expect(convertTemperature(122.11)).toEqual([395.26, 251.798]);
  });
});
