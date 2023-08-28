import { MyStack } from './leetcode-225';

describe('2023-08-28: LeetCode 225', () => {
  test('Example 1', () => {
    const myStack = new MyStack();
    myStack.push(1);
    myStack.push(2);
    expect(myStack.top()).toBe(2);
    expect(myStack.pop()).toBe(2);
    expect(myStack.empty()).toBe(false);
  });
});
