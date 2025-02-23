import { calculate } from './0224';

describe('LeetCode 0224', () => {
  test('Example 1', () => {
    const s = '1 + 1';
    expect(calculate(s)).toBe(2);
  });

  test('Example 2', () => {
    const s = ' 2-1 + 2 ';
    expect(calculate(s)).toBe(3);
  });

  test('Example 3', () => {
    const s = '(1+(4+5+2)-3)+(6+8)';
    expect(calculate(s)).toBe(23);
  });
});
