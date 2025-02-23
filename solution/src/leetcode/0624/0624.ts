/**
 * 624. Maximum Distance in Arrays
 * https://leetcode.com/problems/maximum-distance-in-arrays
 */
export function maxDistance(arrays: number[][]): number {
  let answer = 0;
  let [min, max] = getFirstAndLast(arrays[0]);
  for (let i = 1; i < arrays.length; i++) {
    const [currMin, currMax] = getFirstAndLast(arrays[i]);
    answer = Math.max(answer, Math.abs(currMax - min), Math.abs(max - currMin));
    [min, max] = [Math.min(min, currMin), Math.max(currMax, max)];
  }
  return answer;
}

function getFirstAndLast(arr: number[]): [number, number] {
  return [arr[0], arr[arr.length - 1]];
}
