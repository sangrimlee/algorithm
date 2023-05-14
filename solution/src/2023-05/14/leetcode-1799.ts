/**
 * 1799. Maximize Score After N Operations
 * https://leetcode.com/problems/maximize-score-after-n-operations
 */
export function maxScore(nums: number[]): number {
  const gcd = (x: number, y: number): number => {
    return y === 0 ? x : gcd(y, x % y);
  };

  const n = nums.length;
  const memo = new Array<number>(1 << nums.length).fill(-1);

  const backtracking = (mask: number, pairsPicked: number) => {
    if (2 * pairsPicked === n) {
      return 0;
    }

    if (memo[mask] !== -1) {
      return memo[mask];
    }

    let maxScore = 0;
    for (let firstIndex = 0; firstIndex < n; firstIndex++) {
      for (let secondIndex = firstIndex + 1; secondIndex < n; secondIndex++) {
        if (((mask >> firstIndex) & 1) === 1 || ((mask >> secondIndex) & 1) === 1) {
          continue;
        }
        const newMask = mask | (1 << firstIndex) | (1 << secondIndex);
        const currentScore = (pairsPicked + 1) * gcd(nums[firstIndex], nums[secondIndex]);
        const remainingScore = backtracking(newMask, pairsPicked + 1);

        maxScore = Math.max(maxScore, currentScore + remainingScore);
      }
    }

    return (memo[mask] = maxScore);
  };

  return backtracking(0, 0);
}
