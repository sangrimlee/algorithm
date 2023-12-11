import { modifyString } from './leetcode-1576';

describe('2023-12-11: LeetCode 1576', () => {
  test('Example 1', () => {
    expect(modifyString('?zs')).toBe('azs');
  });
  test('Example 2', () => {
    expect(modifyString('ubv?w')).toBe('ubvaw');
  });
});
