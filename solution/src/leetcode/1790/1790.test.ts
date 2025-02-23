import { areAlmostEqual } from './1790';

describe('LeetCode 1790', () => {
  test('Example 1', () => {
    expect(areAlmostEqual('bank', 'kanb')).toBe(true);
  });
  test('Example 2', () => {
    expect(areAlmostEqual('attack', 'defend')).toBe(false);
  });
  test('Example 3', () => {
    expect(areAlmostEqual('kelb', 'kelb')).toBe(true);
  });
});
