/**
 * 150369. 택배 배달과 수거하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/150369
 */
export function deliveryAndCollect(
  cap: number,
  n: number,
  deliveries: number[],
  pickups: number[],
): number {
  const popUntilNotZero = (stack: number[]) => {
    while (stack.at(-1) === 0) {
      stack.pop();
    }
  };

  const popWithCapacity = (stack: number[]) => {
    let remainCapacity = cap;
    while (0 < stack.length && 0 < remainCapacity) {
      const topOfStack = stack[stack.length - 1];
      if (topOfStack <= remainCapacity) {
        remainCapacity -= topOfStack;
        stack.pop();
      } else {
        stack[stack.length - 1] -= remainCapacity;
        remainCapacity = 0;
      }
    }
  };

  let answer = 0;
  while (0 < deliveries.length || 0 < pickups.length) {
    popUntilNotZero(deliveries);
    popUntilNotZero(pickups);
    answer += Math.max(deliveries.length, pickups.length) * 2;
    popWithCapacity(deliveries);
    popWithCapacity(pickups);
  }

  return answer;
}
