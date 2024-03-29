/**
 * 1491. Average Salary Excluding the Minimum and Maximum Salary
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary
 */
export function average(salary: number[]): number {
  const [min, max, total] = salary.reduce(
    ([min, max, total], value) => [Math.min(min, value), Math.max(max, value), total + value],
    [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0],
  );

  return (total - min - max) / (salary.length - 2);
}
