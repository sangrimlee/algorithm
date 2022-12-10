import { orderlyQueue } from './leetcode-899';

describe('2022-11-06: Leetcode 899', () => {
  test('Example 1', () => {
    const s = 'cba';
    const k = 1;
    expect(orderlyQueue(s, k)).toBe('acb');
  });

  test('Example 2', () => {
    const s = 'baaca';
    const k = 3;
    expect(orderlyQueue(s, k)).toBe('aaabc');
  });
});
