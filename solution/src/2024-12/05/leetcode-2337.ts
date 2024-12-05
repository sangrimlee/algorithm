/**
 * 2337. Move Pieces to Obtain a String
 * https://leetcode.com/problems/move-pieces-to-obtain-a-string
 */
export function canChange(start: string, target: string): boolean {
  const n = start.length;
  let [startIndex, targetIndex] = [0, 0];

  while (startIndex < n || targetIndex < n) {
    while (startIndex < n && start[startIndex] === '_') {
      startIndex += 1;
    }

    while (targetIndex < n && target[targetIndex] === '_') {
      targetIndex += 1;
    }

    if (startIndex === n || targetIndex === n) {
      return startIndex === n && targetIndex === n;
    }

    if (
      start[startIndex] !== target[targetIndex] ||
      (start[startIndex] === 'L' && startIndex < targetIndex) ||
      (start[startIndex] === 'R' && startIndex > targetIndex)
    ) {
      return false;
    }

    startIndex += 1;
    targetIndex += 1;
  }

  return true;
}
