import { addTwoPromises } from './2723';

describe('LeetCode 2723', () => {
  test('Example 1', async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => {
        resolve(2);
      }, 20),
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => {
        resolve(5);
      }, 60),
    );

    expect(await addTwoPromises(promise1, promise2)).toBe(7);
  });
  test('Example 2', async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => {
        resolve(10);
      }, 50),
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => {
        resolve(-12);
      }, 30),
    );

    expect(await addTwoPromises(promise1, promise2)).toBe(-2);
  });
});
