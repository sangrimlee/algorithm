import { minimumDeletions } from './1653';

describe('LeetCode 1653', () => {
  test('Example 1', () => {
    expect(minimumDeletions('aababbab')).toBe(2);
  });
  test('Example 2', () => {
    expect(minimumDeletions('bbaaaaabb')).toBe(2);
  });
});
