import { countSeniors } from './2678';

describe('LeetCode 2678', () => {
  test('Example 1', () => {
    expect(countSeniors(['7868190130M7522', '5303914400F9211', '9273338290F4010'])).toBe(2);
  });
  test('Example 2', () => {
    expect(countSeniors(['1313579440F2036', '2921522980M5644'])).toBe(0);
  });
});
