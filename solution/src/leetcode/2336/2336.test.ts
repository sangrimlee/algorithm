import { SmallestInfiniteSet } from './2336';

describe('LeetCode 2336', () => {
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
