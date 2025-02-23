import { CustomStack } from './1381';

describe('LeetCode 1381', () => {
  test('Example 1', () => {
    const stk = new CustomStack(3); // Stack is Empty []
    stk.push(1); // stack becomes [1]
    stk.push(2); // stack becomes [1, 2]
    expect(stk.pop()).toBe(2);
    stk.push(2); // stack becomes [1, 2]
    stk.push(3); // stack becomes [1, 2, 3]
    stk.push(4); // stack still [1, 2, 3], Do not add another elements as size is 4
    stk.increment(5, 100); // stack becomes [101, 102, 103]
    stk.increment(2, 100); // stack becomes [201, 202, 103]
    expect(stk.pop()).toBe(103);
    expect(stk.pop()).toBe(202);
    expect(stk.pop()).toBe(201);
    expect(stk.pop()).toBe(-1);
  });
});
