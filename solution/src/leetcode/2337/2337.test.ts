import { canChange } from './2337';

describe('LeetCode 2337', () => {
  test('Example 1', () => {
    expect(canChange('_L__R__R_', 'L______RR')).toBe(true);
  });
  test('Example 2', () => {
    expect(canChange('R_L_', '__LR')).toBe(false);
  });
  test('Example 3', () => {
    expect(canChange('_R', 'R_')).toBe(false);
  });
});
