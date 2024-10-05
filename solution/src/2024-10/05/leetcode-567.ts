/**
 * 567. Permutation in String
 * https://leetcode.com/problems/permutation-in-string
 */
export function checkInclusion(s1: string, s2: string): boolean {
  const [m, n] = [s1.length, s2.length];
  if (m > n) {
    return false;
  }

  const counts = new Array<number>(26).fill(0);
  for (let i = 0; i < m; i++) {
    counts[getIndex(s1[i])] += 1;
    counts[getIndex(s2[i])] -= 1;
  }

  if (isMatched(counts)) {
    return true;
  }

  for (let i = m; i < n; i++) {
    counts[getIndex(s2[i])] -= 1;
    counts[getIndex(s2[i - m])] += 1;
    if (isMatched(counts)) {
      return true;
    }
  }
  return false;
}

function getIndex(char: string) {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

function isMatched(counts: number[]) {
  return counts.every((count) => count === 0);
}
