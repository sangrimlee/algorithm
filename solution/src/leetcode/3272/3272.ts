/**
 * 3272. Find the Count of Good Integers
 * https://leetcode.com/problems/find-the-count-of-good-integers
 */
export function countGoodIntegers(n: number, k: number): number {
  const set = new Set<string>();
  const base = 10 ** Math.floor((n - 1) / 2);
  const skipLast = n % 2 === 1;

  for (let i = base; i < 10 * base; i++) {
    const palindrome = createPalindrome(i, skipLast);
    const palindromicInteger = Number(palindrome);
    if (palindromicInteger % k === 0) {
      set.add(sortStr(palindrome));
    }
  }

  let answer = 0;
  const factorial = getFactorial(n);
  for (const s of set) {
    const digitCount = countDigit(s);
    answer += countPermutations(n, digitCount, factorial);
  }
  return answer;
}

/**
 * 주어진 숫자를 팰린드롬 문자열로 변환
 *
 * @example
 * createPalindrome(123, false); // 123321
 * createPalindrome(123, true); // 12321
 */
function createPalindrome(num: number, skipLast: boolean): string {
  const left = num.toString();
  const right = reverseStr(left).substring(skipLast ? 1 : 0);
  return `${left}${right}`;
}

/**
 * 0부터 n까지의 팩토리얼 배열을 계산하여 반환
 */
function getFactorial(n: number): bigint[] {
  const factorial = new Array<bigint>(n + 1).fill(1n);
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * BigInt(i);
  }
  return factorial;
}

/**
 * 문자열 s의 각 자릿수(0~9) 등장 횟수를 배열로 반환
 */
function countDigit(s: string): number[] {
  const digitCount = new Array<number>(10).fill(0);
  for (const digit of s) {
    digitCount[Number(digit)] += 1;
  }
  return digitCount;
}

/**
 * 중복 순열을 이용해 가능한 좋은(good) 정수의 개수를 계산
 * 앞자리가 0인 경우는 제외
 */
function countPermutations(n: number, digitCount: number[], factorial: bigint[]): number {
  let totalCount = BigInt(n - digitCount[0]) * factorial[n - 1];
  for (const count of digitCount) {
    totalCount /= factorial[count];
  }
  return Number(totalCount);
}

function reverseStr(s: string): string {
  return s.split('').reverse().join('');
}

function sortStr(s: string): string {
  return s.split('').sort().join('');
}
