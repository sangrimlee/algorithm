/**
 * 860. Lemonade Change
 * https://leetcode.com/problems/lemonade-change
 */
export function lemonadeChange(bills: number[]): boolean {
  let five = 0;
  let ten = 0;
  for (const bill of bills) {
    if (bill === 5) {
      five += 1;
    } else if (bill === 10) {
      if (five === 0) {
        return false;
      }
      ten += 1;
      five -= 1;
    } else {
      if (1 <= ten && 1 <= five) {
        ten -= 1;
        five -= 1;
      } else if (3 <= five) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}
