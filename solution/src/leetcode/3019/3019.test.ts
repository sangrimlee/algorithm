import { countKeyChanges } from './3019';

describe('LeetCode 3019', () => {
  test('Example 1', () => {
    expect(countKeyChanges('aAbBcC')).toBe(2);
  });
  test('Example 2', () => {
    expect(countKeyChanges('AaAaAaaA')).toBe(0);
  });
});
