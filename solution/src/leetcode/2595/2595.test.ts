import { evenOddBit } from './2595';

describe('LeetCode 2595', () => {
  test('Example 1', () => {
    expect(evenOddBit(17)).toEqual([2, 0]);
  });
  test('Example 2', () => {
    expect(evenOddBit(2)).toEqual([0, 1]);
  });
});
