/**
 * 1095. Find in Mountain Array
 * https://leetcode.com/problems/find-in-mountain-array
 */
export class MountainArray {
  private readonly arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  get(index: number): number {
    return this.arr[index];
  }

  length(): number {
    return this.arr.length;
  }
}

export function findInMountainArray(target: number, mountainArr: MountainArray) {
  const length = mountainArr.length();

  let peakIndex = 0;
  let [start, end] = [0, length];
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      start = mid + 1;
      peakIndex = mid + 1;
    } else {
      end = mid;
    }
  }

  [start, end] = [0, peakIndex - 1];
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (mountainArr.get(mid) === target) {
      return mid;
    } else if (mountainArr.get(mid) < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  [start, end] = [peakIndex, length - 1];
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (mountainArr.get(mid) === target) {
      return mid;
    } else if (mountainArr.get(mid) > target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
