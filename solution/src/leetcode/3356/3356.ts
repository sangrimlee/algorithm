/**
 * 3356. Zero Array Transformation II
 * https://leetcode.com/problems/zero-array-transformation-ii
 */
export function minZeroArray(nums: number[], queries: number[][]): number {
  const n = nums.length;
  const decrements = new Array<number>(n + 1).fill(0);

  let k = 0;
  let totalDecrement = 0;
  for (let i = 0; i < n; i++) {
    // 현재까지 적용된 감소량이 num[i]보다 작다면 추가적인 쿼리를 사용해야합니다.
    while (totalDecrement + decrements[i] < nums[i]) {
      k += 1;
      // 모든 쿼리를 사용해도 ZeroArray를 만들 수 없는 경우
      if (k > queries.length) {
        return -1;
      }

      const [left, right, value] = queries[k - 1];
      // 현재 인덱스보다 right가 크다면 해당 쿼리를 적용합니다.
      // i보다 작은 인덱스는 모두 0이므로 더 이상 적용하지 않아도 된다.
      if (i <= right) {
        decrements[Math.max(left, i)] += value;
        decrements[right + 1] -= value;
      }
    }
    totalDecrement += decrements[i];
  }
  return k;
}
