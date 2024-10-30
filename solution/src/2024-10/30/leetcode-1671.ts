/**
 * 1671. Minimum Number of Removals to Make Mountain Array
 * https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array
 */
export function minimumMountainRemovals(nums: number[]): number {
  const n = nums.length;
  const lisLength = getLISLength(nums);
  const ldsLength = getLISLength(nums.reverse()).reverse();

  let answer = n;
  for (let i = 0; i < n; i++) {
    if (1 < lisLength[i] && 1 < ldsLength[i]) {
      answer = Math.min(answer, n - lisLength[i] - ldsLength[i] + 1);
    }
  }
  return answer;
}

function lowerBound(arr: number[], target: number): number {
  let [left, right] = [0, arr.length];
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function getLISLength(arr: number[]): number[] {
  const result = new Array<number>(arr.length).fill(1);
  const lis = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    const index = lowerBound(lis, arr[i]);
    if (index === lis.length) {
      lis.push(arr[i]);
    } else {
      lis[index] = arr[i];
    }
    result[i] = lis.length;
  }
  return result;
}
