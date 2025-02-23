import { compareTree, createTree } from '@algorithm/lib';
import { recoverFromPreorder } from './1028';

describe('LeetCode 1028', () => {
  test('Example 1', () => {
    const root = createTree([1, 2, 5, 3, 4, 6, 7]);
    const recoveredRoot = recoverFromPreorder('1-2--3--4-5--6--7');
    expect(compareTree(root, recoveredRoot)).toBe(true);
  });

  test('Example 2', () => {
    const root = createTree([1, 2, 5, 3, null, 6, null, 4, null, 7]);
    const recoveredRoot = recoverFromPreorder('1-2--3---4-5--6---7');
    expect(compareTree(root, recoveredRoot)).toBe(true);
  });

  test('Example 3', () => {
    const root = createTree([1, 401, null, 349, 88, 90]);
    const recoveredRoot = recoverFromPreorder('1-401--349---90--88');
    expect(compareTree(root, recoveredRoot)).toBe(true);
  });
});
