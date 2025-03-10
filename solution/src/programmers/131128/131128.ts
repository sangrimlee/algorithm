/**
 * 131128. 숫자 짝꿍
 * https://school.programmers.co.kr/learn/courses/30/lessons/131128
 */
export function partnerNumber(X: string, Y: string) {
  const counterX = new Counter(X);
  const counterY = new Counter(Y);

  const getCount = (num: number) => {
    return Math.min(counterX.get(num.toString()), counterY.get(num.toString()));
  };

  let answer = '';
  for (let num = 0; num < 10; num++) {
    answer = num.toString().repeat(getCount(num)) + answer;
  }

  if (answer === '') {
    return '-1';
  }

  if (getCount(0) === answer.length) {
    return '0';
  }

  return answer;
}

class Counter {
  private readonly map: Map<string, number>;

  constructor(str: string) {
    this.map = new Map();
    for (const char of str) {
      this.add(char);
    }
  }

  get(key: string) {
    return this.map.get(key) ?? 0;
  }

  add(key: string) {
    this.map.set(key, this.get(key) + 1);
  }
}
