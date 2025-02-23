import { RandomizedSet } from './0380';

describe('LeetCode 0380', () => {
  test('Example 1', () => {
    const randomizedSet = new RandomizedSet();
    expect(randomizedSet.insert(1)).toBeTruthy();
    expect(randomizedSet.remove(2)).toBeFalsy();
    expect(randomizedSet.insert(2)).toBeTruthy();
    expect([1, 2]).toContain(randomizedSet.getRandom());
    expect(randomizedSet.remove(1)).toBeTruthy();
    expect(randomizedSet.insert(2)).toBeFalsy();
    expect(randomizedSet.getRandom()).toBe(2);
  });
});
