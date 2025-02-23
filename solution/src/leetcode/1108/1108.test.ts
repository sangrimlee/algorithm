import { defangIPaddr } from './1108';

describe('LeetCode 1108', () => {
  test('Example 1', () => {
    expect(defangIPaddr('1.1.1.1')).toBe('1[.]1[.]1[.]1');
  });
  test('Example 2', () => {
    expect(defangIPaddr('255.100.50.0')).toBe('255[.]100[.]50[.]0');
  });
});
