/**
 * 985. Sum of Even Numbers After Queries
 * https://leetcode.com/problems/sum-of-even-numbers-after-queries/
 */
export function sumEvenAfterQueries(
  nums: number[],
  queries: number[][]
): number[] {
  const isEven = (num: number) => num % 2 === 0;
  let totalValue = nums.reduce(
    (total, num) => (isEven(num) ? total + num : total),
    0
  );

  const answer: number[] = [];
  queries.forEach(([value, i]) => {
    if (isEven(nums[i])) {
      totalValue -= nums[i];
    }
    nums[i] += value;
    if (isEven(nums[i])) {
      totalValue += nums[i];
    }
    answer.push(totalValue);
  });

  return answer;
}
