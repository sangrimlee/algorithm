import { fractionAddition } from './0592';

describe('LeetCode 0592', () => {
  test('Example 1', () => {
    expect(fractionAddition('-1/2+1/2')).toBe('0/1');
  });
  test('Example 2', () => {
    expect(fractionAddition('-1/2+1/2+1/3')).toBe('1/3');
  });
  test('Example 3', () => {
    expect(fractionAddition('1/3-1/2')).toBe('-1/6');
  });
});
