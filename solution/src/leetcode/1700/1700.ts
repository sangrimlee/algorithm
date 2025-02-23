/**
 * 1700. Number of Students Unable to Eat Lunch
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch
 */
export function countStudents(students: number[], sandwiches: number[]): number {
  const n = students.length;
  const counts = [0, 0];
  students.forEach((student) => {
    counts[student] += 1;
  });

  let i = 0;
  while (i < n && 0 < counts[sandwiches[i]]) {
    counts[sandwiches[i]] -= 1;
    i += 1;
  }
  return n - i;
}
