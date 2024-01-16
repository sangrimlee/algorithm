/**
 * 258709. 주사위 고르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/258709
 */
function combinations(n: number, k: number): number[][] {
  const result: number[][] = [];

  function backtrack(current: number[], start: number): void {
    if (current.length === k) {
      result.push([...current]);
      return;
    }
    for (let i = start; i < n; i++) {
      current.push(i);
      backtrack(current, i + 1);
      current.pop();
    }
  }
  backtrack([], 0);
  return result;
}

function getAllDiceResult(dices: number[][], indices: number[]): number[] {
  const result: number[] = [];
  function dfs(current: number, i: number): void {
    if (i === indices.length) {
      result.push(current);
      return;
    }
    for (const value of dices[indices[i]]) {
      dfs(current + value, i + 1);
    }
  }
  dfs(0, 0);
  return result.sort((a, b) => a - b);
}

function getKey(indices: number[]): number {
  return indices.reduce((prev, i) => prev + (1 << i), 0);
}

function getOpponentKey(n: number, key: number): number {
  return ((1 << n) - 1) ^ key;
}

function parseKey(n: number, key: number): number[] {
  const indices: number[] = [];

  for (let i = 0; i < n; i++) {
    if (key & (1 << i)) {
      indices.push(i);
    }
  }
  return indices;
}

function lowerbound(arr: number[], target: number): number {
  let [start, end] = [0, arr.length];
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

export function selectDice(dice: number[][]): number[] {
  const n = dice.length;
  const results = new Map<number, number[]>();
  for (const indices of combinations(n, n / 2)) {
    const key = getKey(indices);
    const result = getAllDiceResult(dice, indices);
    results.set(key, result);
  }

  let maxDices: number[] = [];
  let maxWins = 0;
  for (const [key, result] of results.entries()) {
    const opponentKey = getOpponentKey(n, key);
    const opponentResult = results.get(opponentKey) ?? [];
    let wins = 0;
    for (const value of result) {
      wins += lowerbound(opponentResult, value);
    }

    if (maxWins < wins) {
      maxWins = wins;
      maxDices = parseKey(n, key);
    }
  }

  return maxDices.map((i) => i + 1);
}
