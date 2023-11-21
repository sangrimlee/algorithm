/**
 * 1814. Count Nice Pairs in an Array
 * https://leetcode.com/problems/count-nice-pairs-in-an-array
 */
export function countNicePairs(nums: number[]): number {
  const MOD = 10 ** 9 + 7;
  const rev = (num: number) => {
    return parseInt([...num.toString()].reverse().join(''), 10);
  };

  const counter = new Map<number, number>();
  for (const num of nums) {
    const sub = num - rev(num);
    counter.set(sub, (counter.get(sub) ?? 0) + 1);
  }

  let answer = 0;
  counter.forEach((count) => {
    answer += (count * (count - 1)) / 2;
    answer %= MOD;
  });
  return answer;
}
