/**
 * 131704. 택배상자
 * https://school.programmers.co.kr/learn/courses/30/lessons/131704
 */
export function courierBox(orders: number[]) {
  const stack = [];
  let [answer, current] = [0, 1];

  for (const order of orders) {
    while (current < order) {
      stack.push(current);
      current += 1;
    }
    if (order === current) {
      answer += 1;
      current += 1;
    } else if (stack.at(-1) === order) {
      answer += 1;
      stack.pop();
    } else {
      return answer;
    }
  }

  return answer;
}
