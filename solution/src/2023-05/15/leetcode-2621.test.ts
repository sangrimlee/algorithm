import { sleep } from './leetcode-2621';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('2023-05-15: LeetCode 2621', () => {
  test('Example 1', () => {
    sleep(10);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10);
  });

  it('should throw TypeError', async () => {
    await expect(sleep(NaN)).rejects.toEqual('TypeError');
  });
});
