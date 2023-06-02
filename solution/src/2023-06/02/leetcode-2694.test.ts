import { EventEmitter } from './leetcode-2694';

describe('2023-06-02: LeetCode 2694', () => {
  test('Example 1', () => {
    const emitter = new EventEmitter();
    expect(emitter.emit('firstEvent')).toEqual([]);
    emitter.subscribe('firstEvent', () => 5);
    emitter.subscribe('firstEvent', () => 6);
    expect(emitter.emit('firstEvent')).toEqual([5, 6]);
  });
  test('Example 2', () => {
    const emitter = new EventEmitter();
    emitter.subscribe('firstEvent', (...args: string[]) => args.join(','));
    expect(emitter.emit('firstEvent', [1, 2, 3])).toEqual(['1,2,3']);
    expect(emitter.emit('firstEvent', [3, 4, 6])).toEqual(['3,4,6']);
  });
  test('Example 3', () => {
    const emitter = new EventEmitter();
    const sub = emitter.subscribe('firstEvent', (...args: string[]) => args.join(','));
    expect(emitter.emit('firstEvent', [1, 2, 3])).toEqual(['1,2,3']);
    sub.unsubscribe();
    expect(emitter.emit('firstEvent', [4, 5, 6])).toEqual([]);
  });
});
