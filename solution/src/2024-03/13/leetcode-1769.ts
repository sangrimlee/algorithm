/**
 * 1769. Minimum Number of Operations to Move All Balls to Each Box
 * https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box
 */
export function minOperations(boxes: string): number[] {
  const n = boxes.length;

  let leftBallCount = parseInt(boxes[0]);
  const leftDistances = new Array<number>(n).fill(0);

  let rightBallCount = parseInt(boxes[n - 1]);
  const rightDistances = new Array<number>(n).fill(0);
  for (let i = 1; i < n; i++) {
    leftDistances[i] = leftDistances[i - 1] + leftBallCount;
    leftBallCount += parseInt(boxes[i]);

    rightDistances[n - i - 1] = rightDistances[n - i] + rightBallCount;
    rightBallCount += parseInt(boxes[n - i - 1]);
  }

  return Array.from({ length: n }, (_, i) => leftDistances[i] + rightDistances[i]);
}
