import { prefixesDivBy5 } from './1018';

describe('LeetCode 1018', () => {
  test('Example 1', () => {
    expect(prefixesDivBy5([0, 1, 1])).toEqual([true, false, false]);
  });
  test('Example 2', () => {
    expect(prefixesDivBy5([1, 1, 1])).toEqual([false, false, false]);
  });
});
