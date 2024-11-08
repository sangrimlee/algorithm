import { SmallestInfiniteSet } from './leetcode-2336';

describe('2024-11-08: LeetCode 2336', () => {
  test('Example 1', () => {
    const smallestInfiniteSet = new SmallestInfiniteSet();
    smallestInfiniteSet.addBack(2);
    expect(smallestInfiniteSet.popSmallest()).toBe(1);
    expect(smallestInfiniteSet.popSmallest()).toBe(2);
    expect(smallestInfiniteSet.popSmallest()).toBe(3);
    smallestInfiniteSet.addBack(1);
    expect(smallestInfiniteSet.popSmallest()).toBe(1);
    expect(smallestInfiniteSet.popSmallest()).toBe(4);
    expect(smallestInfiniteSet.popSmallest()).toBe(5);
  });
});
