import { MedianFinder } from './leetcode-295';

describe('2022-11-12: Leetcode 295', () => {
  test('Example 1', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    expect(medianFinder.findMedian()).toBe(1.5);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2.0);
  });
});
