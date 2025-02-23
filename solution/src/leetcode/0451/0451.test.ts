import { frequencySort } from './0451';

describe('LeetCode 0451', () => {
  test('Example 1', () => {
    const s = 'tree';
    expect(frequencySort(s)).toBe('eetr');
  });

  test('Example 2', () => {
    const s = 'cccaaa';
    expect(frequencySort(s)).toBe('cccaaa');
  });

  test('Example 3', () => {
    const s = 'Aabb';
    expect(frequencySort(s)).toBe('bbAa');
  });

  test('Example 4', () => {
    const s = 'ababb';
    expect(frequencySort(s)).toBe('bbbaa');
  });
});
