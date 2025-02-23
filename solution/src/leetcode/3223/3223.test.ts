import { minimumLength } from './3223';

describe('LeetCode 3223', () => {
  test('Example 1', () => {
    expect(minimumLength('abaacbcbb')).toBe(5);
  });
  test('Example 2', () => {
    expect(minimumLength('aa')).toBe(2);
  });
});
