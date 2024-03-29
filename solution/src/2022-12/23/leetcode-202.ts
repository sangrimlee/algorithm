/**
 * 202. Happy Number
 * https://leetcode.com/problems/happy-number/
 */
export function isHappy(n: number): boolean {
  const getNextNum = (num: number) => {
    let totalNum = 0;
    while (0 < num) {
      totalNum += (num % 10) ** 2;
      num = Math.floor(num / 10);
    }
    return totalNum;
  };

  let num = n;
  const cycled = new Set<number>([4, 16, 37, 58, 89, 145, 42, 20]);

  while (num !== 1 && !cycled.has(num)) {
    num = getNextNum(num);
  }

  return num === 1;
}
