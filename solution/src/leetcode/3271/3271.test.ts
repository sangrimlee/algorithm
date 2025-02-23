import { stringHash } from './3271';

describe('LeetCode 3271', () => {
  test('Example 1', () => {
    expect(stringHash('abcd', 2)).toBe('bf');
  });
  test('Example 2', () => {
    expect(stringHash('mxz', 3)).toBe('i');
  });
});
