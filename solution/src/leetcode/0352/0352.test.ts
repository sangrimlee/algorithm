import { SummaryRanges } from './0352';

describe('LeetCode 0352', () => {
  test('Example', () => {
    const summaryRanges = new SummaryRanges();
    summaryRanges.addNum(1);
    expect(summaryRanges.getIntervals()).toEqual([[1, 1]]);
    summaryRanges.addNum(3);
    expect(summaryRanges.getIntervals()).toEqual([
      [1, 1],
      [3, 3],
    ]);
    summaryRanges.addNum(7);
    expect(summaryRanges.getIntervals()).toEqual([
      [1, 1],
      [3, 3],
      [7, 7],
    ]);
    summaryRanges.addNum(2);
    expect(summaryRanges.getIntervals()).toEqual([
      [1, 3],
      [7, 7],
    ]);
    summaryRanges.addNum(6);
    expect(summaryRanges.getIntervals()).toEqual([
      [1, 3],
      [6, 7],
    ]);
  });
});
