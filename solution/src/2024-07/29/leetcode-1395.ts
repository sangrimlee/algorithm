/**
 * 1395. Count Number of Teams
 * https://leetcode.com/problems/count-number-of-teams
 */
export function numTeams(rating: number[]): number {
  const n = rating.length;

  let answer = 0;
  for (let mid = 1; mid < n - 1; mid++) {
    let [leftGreater, leftLess] = [0, 0];
    for (let left = 0; left < mid; left++) {
      if (rating[left] > rating[mid]) {
        leftGreater += 1;
      } else {
        leftLess += 1;
      }
    }

    let [rightGreater, rightLess] = [0, 0];
    for (let right = mid + 1; right < n; right++) {
      if (rating[right] > rating[mid]) {
        rightGreater += 1;
      } else {
        rightLess += 1;
      }
    }
    answer += leftGreater * rightLess + leftLess * rightGreater;
  }
  return answer;
}