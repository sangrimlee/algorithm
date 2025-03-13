/**
 * 3306. Count of Substrings Containing Every Vowel and K Consonants II
 * https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii
 */
export function countOfSubstrings(word: string, k: number): number {
  return atLeastK(word, k) - atLeastK(word, k + 1);
}

type Vowel = 'a' | 'e' | 'i' | 'o' | 'u';

function isVowel(value: string): value is Vowel {
  return /^[aeiou]$/.test(value);
}

function atLeastK(word: string, k: number): number {
  const vowelCount: Record<Vowel, number> = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  let vowel = 0; // 현재 윈도우 내 서로 다른 모음 개수
  let consonantCount = 0; // 현재 윈도우 내 자음 개수
  let validCount = 0; // 조건을 만족하는 부분 문자열 개수

  let start = 0;
  for (let end = 0; end < word.length; end++) {
    const endChar = word[end];
    if (isVowel(endChar)) {
      if (vowelCount[endChar] === 0) {
        vowel += 1;
      }
      vowelCount[endChar] += 1;
    } else {
      consonantCount += 1;
    }

    // 모든 모음이 포함되고, 자음이 k개 이상이면 유효한 부분 문자열로 인정
    while (vowel === 5 && consonantCount >= k) {
      // 현재 end부터 끝까지 유효한 부분 문자열이므로 word.length - end개의 부분 문자열 추가
      validCount += word.length - end;

      // start부터 차례대로 한 칸씩 이동하면서 조건이 유지되는지 확인
      const startChar = word[start];
      if (isVowel(startChar)) {
        vowelCount[startChar] -= 1;
        if (vowelCount[startChar] === 0) {
          vowel -= 1;
        }
      } else {
        consonantCount -= 1;
      }
      start += 1;
    }
  }
  return validCount;
}
