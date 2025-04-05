/**
 * 3394. Check if Grid can be Cut into Sections
 * https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections
 */
export function checkValidCuts(n: number, rectangles: number[][]): boolean {
  const xRanges = rectangles
    .map((rectangle) => [rectangle[0], rectangle[2]])
    .sort((a, b) => a[0] - b[0]);
  const yRanges = rectangles
    .map((rectangle) => [rectangle[1], rectangle[3]])
    .sort((a, b) => a[0] - b[0]);

  return countSections(xRanges) >= 3 || countSections(yRanges) >= 3;
}

function countSections(ranges: number[][]) {
  let sections = 1;
  let currentEnd = ranges[0][1];
  for (const [start, end] of ranges) {
    if (currentEnd <= start) {
      sections += 1;
    }
    currentEnd = Math.max(currentEnd, end);
  }
  return sections;
}
