/**
 * 2194. Cells in a Range on an Excel Sheet
 * https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet
 */
export function cellsInRange(s: string): string[] {
  function parse(s: string) {
    const [r, c] = [...s];
    return [r.charCodeAt(0), parseInt(c, 10)];
  }

  const [start, end] = s.split(':');
  const [r1, c1] = parse(start);
  const [r2, c2] = parse(end);

  const answer: string[] = [];
  for (let r = r1; r <= r2; r++) {
    for (let c = c1; c <= c2; c++) {
      answer.push(`${String.fromCharCode(r)}${c}`);
    }
  }
  return answer;
}
