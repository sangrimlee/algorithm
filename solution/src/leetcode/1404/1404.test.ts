import { numSteps } from './1404';

describe('LeetCode 1404', () => {
  test('Example 1', () => {
    expect(numSteps('1101')).toBe(6);
  });
  test('Example 2', () => {
    expect(numSteps('10')).toBe(1);
  });
  test('Example 3', () => {
    expect(numSteps('1')).toBe(0);
  });
});
