import { numberOfWays } from './2147';

describe('LeetCode 2147', () => {
  test('Example 1', () => {
    expect(numberOfWays('SSPPSPS')).toBe(3);
  });
  test('Example 2', () => {
    expect(numberOfWays('PPSPSP')).toBe(1);
  });
  test('Example 3', () => {
    expect(numberOfWays('S')).toBe(0);
  });
});
