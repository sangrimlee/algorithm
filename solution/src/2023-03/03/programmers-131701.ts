/**
 * 131701. 연속 부분 수열 합의 개수
 * https://school.programmers.co.kr/learn/courses/30/lessons/131701
 */
export function solution(elements: number[]) {
  const set = new Set();
  const extended = [...elements, ...elements];

  for (let i = 0; i < elements.length; i++) {
    let sumValue = 0;
    for (let j = 0; j < elements.length; j++) {
      sumValue += extended[i + j];
      set.add(sumValue);
    }
  }

  return set.size;
}
