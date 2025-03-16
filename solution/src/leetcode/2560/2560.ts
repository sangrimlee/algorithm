/**
 * 2560. House Robber IV
 * https://leetcode.com/problems/house-robber-iv
 */
export function minCapability(nums: number[], k: number): number {
  // 주어진 capability로 최소 k개의 집을 털 수 있는지 확인
  function canStealKHouses(capability: number): boolean {
    let i = 0;
    let stolenHouses = 0;
    while (i < nums.length && stolenHouses < k) {
      if (nums[i] <= capability) {
        stolenHouses += 1;
        i += 1;
      }
      i += 1;
    }
    return stolenHouses >= k;
  }

  let left = Math.min(...nums);
  let right = Math.max(...nums);
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canStealKHouses(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
