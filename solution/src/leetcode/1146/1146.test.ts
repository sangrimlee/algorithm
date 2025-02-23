import { SnapshotArray } from './1146';

describe('LeetCode 1146', () => {
  test('Example 1', () => {
    const snapshot = new SnapshotArray(3);
    snapshot.set(0, 5);
    expect(snapshot.snap()).toBe(0);
    snapshot.set(0, 6);
    expect(snapshot.get(0, 0)).toBe(5);
  });
});
