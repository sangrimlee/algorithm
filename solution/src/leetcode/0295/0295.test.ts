import { MedianFinder } from './0295';

describe('LeetCode 0295', () => {
  test('Example 1', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    expect(medianFinder.findMedian()).toBe(1.5);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2.0);
  });
});
