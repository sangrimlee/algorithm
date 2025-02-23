import { finalString } from './2810';

describe('LeetCode 2810', () => {
  test('Example 1', () => {
    expect(finalString('string')).toBe('rtsng');
  });
  test('Example 2', () => {
    expect(finalString('poiinter')).toBe('ponter');
  });
});
