import { MyQueue } from './0232';

describe('LeetCode 0232', () => {
  test('Example 1', () => {
    const queue = new MyQueue();
    expect(queue).toBeDefined();
    queue.push(1);
    queue.push(2);
    expect(queue.peek()).toBe(1);
    expect(queue.pop()).toBe(1);
    expect(queue.empty()).toBeFalsy();
  });
});
