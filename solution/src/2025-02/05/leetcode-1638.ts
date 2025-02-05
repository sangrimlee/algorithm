/**
 * 1638. Count Substrings That Differ by One Character
 * https://leetcode.com/problems/count-substrings-that-differ-by-one-character
 */
export function countSubstrings(s: string, t: string): number {
  const [m, n] = [s.length, t.length];

  let answer = 0;
  for (let i = 0; i < m; i++) {
    answer += countSubstringsFromPosition(s, t, i, 0);
  }
  for (let j = 1; j < n; j++) {
    answer += countSubstringsFromPosition(s, t, 0, j);
  }
  return answer;
}

function countSubstringsFromPosition(s: string, t: string, sStart: number, tStart: number): number {
  const [m, n] = [s.length, t.length];

  let count = 0;
  let [prevStreak, currentStreak] = [0, 0];
  let [sIndex, tIndex] = [sStart, tStart];

  while (sIndex < m && tIndex < n) {
    currentStreak++;

    if (s[sIndex] !== t[tIndex]) {
      prevStreak = currentStreak;
      currentStreak = 0;
    }

    count += prevStreak;
    sIndex += 1;
    tIndex += 1;
  }

  return count;
}
