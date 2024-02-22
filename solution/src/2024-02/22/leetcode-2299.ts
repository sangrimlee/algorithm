/**
 * 2299. Strong Password Checker II
 * https://leetcode.com/problems/strong-password-checker-ii
 */
export function strongPasswordCheckerII(password: string): boolean {
  function checkAdjacent(str: string) {
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        return false;
      }
    }
    return true;
  }

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()+-])[a-zA-Z0-9!@#$%^&*()+-]{8,}$/;

  return checkAdjacent(password) && regex.test(password);
}
