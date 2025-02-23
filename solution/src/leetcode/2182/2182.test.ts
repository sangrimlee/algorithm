import { repeatLimitedString } from './2182';

describe('LeetCode 2182', () => {
  test('Example 1', () => {
    expect(repeatLimitedString('cczazcc', 3)).toBe('zzcccac');
  });
  test('Example 2', () => {
    expect(repeatLimitedString('aababab', 2)).toBe('bbabaa');
  });
});
