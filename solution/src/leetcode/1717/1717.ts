/**
 * 1717. Maximum Score From Removing Substrings
 * https://leetcode.com/problems/maximum-score-from-removing-substrings
 */
export function maximumGain(s: string, x: number, y: number): number {
  const [substr1, score1] = x >= y ? ['ab', x] : ['ba', y];
  const [substr2, score2] = x < y ? ['ab', x] : ['ba', y];

  const { result: result1, totalScore: totalScore1 } = removeSubstring(s, substr1, score1);
  const { totalScore: totalScore2 } = removeSubstring(result1, substr2, score2);
  return totalScore1 + totalScore2;
}

function removeSubstring(s: string, substring: string, score: number) {
  let totalScore = 0;
  const stack: string[] = [];
  for (const char of s) {
    if (stack.at(-1) === substring[0] && char === substring[1]) {
      stack.pop();
      totalScore += score;
    } else {
      stack.push(char);
    }
  }
  return {
    result: stack.join(''),
    totalScore,
  };
}
