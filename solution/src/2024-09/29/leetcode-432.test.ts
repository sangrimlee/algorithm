import { AllOne } from './leetcode-432';

describe('2024-09-29: LeetCode 432', () => {
  test('Example 1', () => {
    const allOne = new AllOne();
    allOne.inc('hello');
    allOne.inc('hello');
    expect(allOne.getMaxKey()).toBe('hello');
    expect(allOne.getMinKey()).toBe('hello');
    allOne.inc('leet');
    expect(allOne.getMaxKey()).toBe('hello');
    expect(allOne.getMinKey()).toBe('leet');
  });
});
