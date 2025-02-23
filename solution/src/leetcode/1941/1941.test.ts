import { areOccurrencesEqual } from './1941';

describe('LeetCode 1941', () => {
  test('Example 1', () => {
    expect(areOccurrencesEqual('abacbc')).toBe(true);
  });
  test('Example 2', () => {
    expect(areOccurrencesEqual('aaabb')).toBe(false);
  });
});
