import { minAddToMakeValid } from './0921';

describe('LeetCode 0921', () => {
  test('Example 1', () => {
    expect(minAddToMakeValid('())')).toBe(1);
  });
  test('Example 2', () => {
    expect(minAddToMakeValid('(((')).toBe(3);
  });
});
