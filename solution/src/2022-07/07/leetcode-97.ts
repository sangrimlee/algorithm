/**
 * 97. Interleaving String
 * https://leetcode.com/problems/interleaving-string/
 */
export function isInterleave(s1: string, s2: string, s3: string): boolean {
  const [n, m, k] = [s1.length, s2.length, s3.length];
  if (n + m !== k) {
    return false;
  }
  let prevRow = new Array(s2.length).fill(false);

  for (let i = 0; i < n + 1; i++) {
    const currentRow: boolean[] = [];
    let prevValue = false;
    for (let j = 0; j < m + 1; j++) {
      prevValue =
        (i === 0 && j === 0) ||
        (prevRow[j] && s3[i + j - 1] === s1[i - 1]) ||
        (prevValue && s3[i + j - 1] === s2[j - 1]);
      currentRow.push(prevValue);
    }
    prevRow = currentRow;
  }

  return prevRow[m];
}
