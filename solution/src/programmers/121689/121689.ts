/**
 * 121689. 카페 확장
 * https://school.programmers.co.kr/learn/courses/30/lessons/121689
 */
export function expandCafe(menu: number[], order: number[], k: number) {
  let answer = 1;

  let currentTime = 0;
  const queue: number[] = [];
  for (const o of order) {
    const lastOrder =
      queue.length === 0 ? currentTime : Math.max(currentTime, queue[queue.length - 1]);
    queue.push(lastOrder + menu[o]);
    while (0 < queue.length && queue[0] <= currentTime) {
      queue.shift();
    }
    currentTime += k;
    answer = Math.max(answer, queue.length);
  }

  return answer;
}
