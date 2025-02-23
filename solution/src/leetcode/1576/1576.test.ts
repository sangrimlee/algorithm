import { modifyString } from './1576';

describe('LeetCode 1576', () => {
  test('Example 1', () => {
    expect(modifyString('?zs')).toBe('azs');
  });
  test('Example 2', () => {
    expect(modifyString('ubv?w')).toBe('ubvaw');
  });
});
