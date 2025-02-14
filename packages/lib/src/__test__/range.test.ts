import { range } from '../range';

test('range with end.', () => {
  expect([...range(10)]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('range with start and end.', () => {
  expect([...range(10, 20)]).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
});

test('range with start, end and step.', () => {
  expect([...range(10, 20, 2)]).toEqual([10, 12, 14, 16, 18]);
});

test('range with start, end and negative step.', () => {
  expect([...range(20, 10, -2)]).toEqual([20, 18, 16, 14, 12]);
});

test('range can not reach end', () => {
  expect([...range(10, 20, -2)]).toEqual([]);
});

test('step is zero', () => {
  expect(() => [...range(10, 20, 0)]).toThrow();
});
