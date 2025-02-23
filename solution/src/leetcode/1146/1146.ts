/**
 * 1146. Snapshot Array
 * https://leetcode.com/problems/snapshot-array
 */
export class SnapshotArray {
  private id: number;
  private readonly snapshots: [number, number][][];

  constructor(length: number) {
    this.id = 0;
    this.snapshots = Array.from({ length }).map(() => [[0, 0]]);
  }

  public set(index: number, val: number): void {
    this.snapshots[index].push([this.id, val]);
  }

  public snap(): number {
    this.id += 1;
    return this.id - 1;
  }

  public get(index: number, snapId: number): number {
    const snaps = this.snapshots[index];
    const snapIndex = this.findSnapIndex(snaps, snapId);
    return snaps[snapIndex][1];
  }

  private findSnapIndex(snaps: [number, number][], snapId: number) {
    let [start, end] = [0, snaps.length];
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (snaps[mid][0] <= snapId) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return end - 1;
  }
}
