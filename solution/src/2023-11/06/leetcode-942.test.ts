import { diStringMatch } from './leetcode-942';

describe('2023-11-06: LeetCode 942', () => {
  test('Example 1', () => {
    expect(diStringMatch('IDID')).toEqual([0, 4, 1, 3, 2]);
  });
  test('Example 2', () => {
    expect(diStringMatch('III')).toEqual([0, 1, 2, 3]);
  });
  test('Example 3', () => {
    expect(diStringMatch('DDI')).toEqual([3, 2, 0, 1]);
  });
});
