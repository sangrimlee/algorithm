import { sleep } from './leetcode-2621';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('2023-05-15: LeetCode 2621', () => {
  test('Example 1', async () => {
    const sleepPromise = sleep(10);
    jest.advanceTimersByTime(10);
    await sleepPromise;
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10);
  });

  it('should throw TypeError', async () => {
    await expect(sleep(NaN)).rejects.toBe('TypeError');
  });
});
