import { orderlyQueue } from './0899';

describe('LeetCode 0899', () => {
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
