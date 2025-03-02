/**
 * 132265. 롤케이크 자르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/132265
 */
export function solution(toppings: number[]): number {
  const toppingCount = new Map<number, number>();
  for (const topping of toppings) {
    toppingCount.set(topping, (toppingCount.get(topping) ?? 0) + 1);
  }

  let answer = 0;
  const currentCount = new Map<number, number>();
  for (const topping of toppings) {
    toppingCount.set(topping, (toppingCount.get(topping) ?? 0) - 1);
    currentCount.set(topping, (currentCount.get(topping) ?? 0) + 1);

    if (toppingCount.get(topping) === 0) {
      toppingCount.delete(topping);
    }
    if (currentCount.size === toppingCount.size) {
      answer += 1;
    }
  }

  return answer;
}
