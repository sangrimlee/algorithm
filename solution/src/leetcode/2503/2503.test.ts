import { maxPoints } from './2503';

describe('LeetCode 2503', () => {
  test('Example 1', () => {
    expect(
      maxPoints(
        [
          [1, 2, 3],
          [2, 5, 7],
          [3, 5, 1],
        ],
        [5, 6, 2],
      ),
    ).toEqual([5, 8, 1]);
  });
  test('Example 2', () => {
    expect(
      maxPoints(
        [
          [5, 2, 1],
          [1, 1, 2],
        ],
        [3],
      ),
    ).toEqual([0]);
  });
  test('Example 3', () => {
    expect(
      maxPoints(
        [
          [420766, 806051, 922751],
          [181527, 815280, 904568],
          [952102, 4037, 140319],
          [324081, 17907, 799523],
          [176688, 90257, 83661],
          [932477, 621193, 623068],
          [135839, 554701, 511427],
          [227575, 450848, 178065],
          [785644, 204668, 835141],
          [313774, 167359, 501496],
          [641317, 620688, 74989],
          [324499, 122376, 270369],
          [2121, 887154, 848859],
          [456704, 7763, 662087],
          [286827, 145349, 468865],
          [277137, 858176, 725551],
          [106131, 93684, 576512],
          [372563, 944355, 497187],
          [884187, 600892, 268120],
          [576578, 515031, 807686],
        ],
        [352655, 586228, 169685, 541073, 584647, 413832, 576537, 616413],
      ),
    ).toEqual([0, 2, 0, 2, 2, 0, 2, 2]);
  });
});
