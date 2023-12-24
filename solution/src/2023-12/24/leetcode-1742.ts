/**
 * 1742. Maximum Number of Balls in a Box
 * https://leetcode.com/problems/maximum-number-of-balls-in-a-box
 */
export function countBalls(lowLimit: number, highLimit: number): number {
  const getSumOfDigits = (num: number) => {
    let total = 0;
    while (0 < num) {
      total += num % 10;
      num = Math.floor(num / 10);
    }
    return total;
  };

  const counts = new Map<number, number>();
  let maxCount = 0;
  for (let i = lowLimit; i <= highLimit; i++) {
    const sumOfDigits = getSumOfDigits(i);
    const count = counts.get(sumOfDigits) ?? 0;
    counts.set(sumOfDigits, count + 1);
    maxCount = Math.max(maxCount, count + 1);
  }
  return maxCount;
}
