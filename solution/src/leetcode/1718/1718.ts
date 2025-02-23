/**
 * 1718. Construct the Lexicographically Largest Valid Sequence
 * https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence
 */
export function constructDistancedSequence(n: number): number[] {
  const size = 2 * n - 1;
  const sequence = new Array<number>(size).fill(0);
  const used = new Array<boolean>(n + 1).fill(false);
  function construct(i: number) {
    if (i === size) {
      return true;
    }
    if (sequence[i] !== 0) {
      return construct(i + 1);
    }

    for (let num = n; 0 < num; num--) {
      if (used[num]) {
        continue;
      }

      used[num] = true;
      sequence[i] = num;
      if (num === 1) {
        if (construct(i + 1)) {
          return true;
        }
      } else if (i + num < size && sequence[i + num] === 0) {
        sequence[i + num] = num;
        if (construct(i + 1)) {
          return true;
        }
        sequence[i + num] = 0;
      }
      sequence[i] = 0;
      used[num] = false;
    }

    return false;
  }

  construct(0);
  return sequence;
}
