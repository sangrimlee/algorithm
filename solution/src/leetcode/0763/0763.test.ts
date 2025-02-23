import { partitionLabels } from './0763';

describe('LeetCode 0763', () => {
  test('Example 1', () => {
    expect(partitionLabels('ababcbacadefegdehijhklij')).toEqual([9, 7, 8]);
  });
  test('Example 2', () => {
    expect(partitionLabels('eccbbbbdec')).toEqual([10]);
  });
});
