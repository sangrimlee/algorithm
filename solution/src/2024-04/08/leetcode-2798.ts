/**
 * 2798. Number of Employees Who Met the Target
 * https://leetcode.com/problems/number-of-employees-who-met-the-target
 */
export function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  return hours.filter((hour) => target <= hour).length;
}
