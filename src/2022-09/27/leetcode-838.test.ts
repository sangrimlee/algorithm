import { pushDominoes } from './leetcode-838';

describe('2022-09-27 LeetCode 838', () => {
  test('Example 1', () => {
    const dominoes = 'RR.L';
    expect(pushDominoes(dominoes)).toBe('RR.L');
  });

  test('Example 2', () => {
    const dominoes = '.L.R...LR..L..';
    expect(pushDominoes(dominoes)).toBe('LL.RR.LLRRLL..');
  });
});
