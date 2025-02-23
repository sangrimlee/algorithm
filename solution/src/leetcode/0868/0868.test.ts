import { binaryGap } from './0868';

describe('LeetCode 0868', () => {
  test('Example 1', () => {
    expect(binaryGap(22)).toBe(2);
  });
  test('Example 2', () => {
    expect(binaryGap(8)).toBe(0);
  });
  test('Example 3', () => {
    expect(binaryGap(5)).toBe(2);
  });
});
