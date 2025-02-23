import { MyStack } from './0225';

describe('LeetCode 0225', () => {
  test('Example 1', () => {
    const myStack = new MyStack();
    myStack.push(1);
    myStack.push(2);
    expect(myStack.top()).toBe(2);
    expect(myStack.pop()).toBe(2);
    expect(myStack.empty()).toBe(false);
  });
});
