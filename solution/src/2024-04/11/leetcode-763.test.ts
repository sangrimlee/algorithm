import { partitionLabels } from './leetcode-763';

describe('2024-04-11: LeetCode 763', () => {
  test('Example 1', () => {
    expect(partitionLabels('ababcbacadefegdehijhklij')).toEqual([9, 7, 8]);
  });
  test('Example 2', () => {
    expect(partitionLabels('eccbbbbdec')).toEqual([10]);
  });
});
