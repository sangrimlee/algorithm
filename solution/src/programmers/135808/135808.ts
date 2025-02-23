/**
 * 135808. 과일 장수
 * https://school.programmers.co.kr/learn/courses/30/lessons/135808
 */
export function fruitSeller(k: number, m: number, scores: number[]) {
  const sortedScores = [...scores].sort((a, b) => b - a);

  let answer = 0;
  for (let i = m - 1; i < sortedScores.length; i += m) {
    answer += sortedScores[i] * m;
  }
  return answer;
}
