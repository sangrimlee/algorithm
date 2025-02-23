/**
 * 1013. Partition Array Into Three Parts With Equal Sum
 * https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum
 */
export function canThreePartsEqualSum(arr: number[]): boolean {
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  if (total % 3 !== 0) {
    return false;
  }
  const average = total / 3;

  let currentSum = 0;
  let partCount = 0;
  for (const num of arr) {
    currentSum += num;
    if (currentSum === average) {
      currentSum = 0;
      partCount += 1;
    }
  }

  return 3 <= partCount;
}
