/**
 * 2226. Maximum Candies Allocated to K Children
 * https://leetcode.com/problems/maximum-candies-allocated-to-k-children
 */
export function maximumCandies(candies: number[], k: number): number {
  const canAllocateCandies = (numberOfCandy: number) => {
    let numberOfChildren = 0;
    for (const candy of candies) {
      numberOfChildren += Math.floor(candy / numberOfCandy);
      if (numberOfChildren >= k) {
        return true;
      }
    }
    return false;
  };

  let left = 0;
  let right = Math.max(...candies);
  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    if (canAllocateCandies(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
