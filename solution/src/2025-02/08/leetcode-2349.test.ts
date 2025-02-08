import { NumberContainers } from './leetcode-2349';

describe('2025-02-08: LeetCode 2349', () => {
  test('Example 1', () => {
    const nc = new NumberContainers();
    expect(nc.find(10)).toBe(-1);
    nc.change(2, 10);
    nc.change(1, 10);
    nc.change(3, 10);
    nc.change(5, 10);
    expect(nc.find(10)).toBe(1);
    nc.change(1, 20);
    expect(nc.find(10)).toBe(2);
  });
});
