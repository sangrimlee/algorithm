/**
 * 133502. 햄버거 만들기
 * https://school.programmers.co.kr/learn/courses/30/lessons/133502
 */
export function makingHamburger(ingredients: number[]) {
  let answer = 0;
  const stack: number[] = [];

  const isMakable = () => {
    return 4 <= stack.length && stack.slice(-4, 4).join('') === '1231';
  };

  for (const ingredient of ingredients) {
    stack.push(ingredient);
    if (isMakable()) {
      stack.splice(-4, 4);
      answer += 1;
    }
  }

  return answer;
}
