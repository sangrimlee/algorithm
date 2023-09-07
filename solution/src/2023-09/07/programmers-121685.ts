/**
 * 121685. [PCCP 모의고사 #1] 유전법칙
 * https://school.programmers.co.kr/learn/courses/30/lessons/121685
 */
export function inheritance(queries: [number, number][]): ('RR' | 'Rr' | 'rr')[] {
  const query = (gen: number, i: number): 'RR' | 'Rr' | 'rr' => {
    if (gen === 1) {
      return 'Rr';
    }
    const groupSize = 4 ** (gen - 2);
    const groupIndex = Math.floor(i / groupSize);
    if (groupIndex === 0) {
      return 'RR';
    }
    if (groupIndex === 3) {
      return 'rr';
    }
    return query(gen - 1, i % groupSize);
  };

  return queries.map(([n, p]) => query(n, p - 1));
}
