/**
 * 2011. Final Value of Variable After Performing Operations
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations
 */
export function finalValueAfterOperations(operations: string[]): number {
  function operate(x: number, operation: string) {
    if (operation === '--X' || operation === 'X--') {
      return x - 1;
    }
    return x + 1;
  }

  return operations.reduce(operate, 0);
}
