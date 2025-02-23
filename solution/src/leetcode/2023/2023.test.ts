import { numOfPairs } from './2023';

describe('LeetCode 2023', () => {
  test('Example 1', () => {
    expect(numOfPairs(['777', '7', '77', '77'], '7777')).toBe(4);
  });
  test('Example 2', () => {
    expect(numOfPairs(['123', '4', '12', '34'], '1234')).toBe(2);
  });
  test('Example 3', () => {
    expect(numOfPairs(['1', '1', '1'], '11')).toBe(6);
  });
});
