/**
 * 140107. 점 찍기
 * https://school.programmers.co.kr/learn/courses/30/lessons/140107
 */
export function markingDot(k: number, d: number) {
  let answer = 0;

  for (let x = 0; x <= d; x += k) {
    const maxY = Math.floor(Math.sqrt(d ** 2 - x ** 2));
    answer += Math.floor(maxY / k) + 1;
  }

  return answer;
}
