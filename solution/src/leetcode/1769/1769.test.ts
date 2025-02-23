import { minOperations } from './1769';

describe('LeetCode 1769', () => {
  test('Example 1', () => {
    expect(minOperations('110')).toEqual([1, 1, 3]);
  });
  test('Example 2', () => {
    expect(minOperations('001011')).toEqual([11, 8, 5, 4, 3, 4]);
  });
});
