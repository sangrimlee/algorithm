import type { TreeNode } from '@algorithm/lib';

/**
 * 968. Binary Tree Cameras
 * https://leetcode.com/problems/binary-tree-cameras/
 */
export function minCameraCover(root: TreeNode | null): number {
  /**
   * 모든 상태
   * 1. 현재 노드의 이전 노드까지 전부 모니터링이 되는 경우
   * 2. 현재 노드까지 전부 모니터링 되는 경우
   * 3. 이전 노드들 모두 모니터링이 되고, 현재 노드에 카메라를 설치한 경우
   * @param {string} node - 현재 노드
   * @returns {[number, number, number]} 각 상태에 따른 결과 값
   */
  function dynamicProgramming(node: TreeNode | null): [number, number, number] {
    if (!node) {
      return [0, 0, Number.MAX_SAFE_INTEGER];
    }
    const left = dynamicProgramming(node.left);
    const right = dynamicProgramming(node.right);

    return [
      left[1] + right[1],
      Math.min(left[2] + Math.min(...right.slice(1)), right[2] + Math.min(...left.slice(1))),
      Math.min(...left) + Math.min(...right) + 1,
    ];
  }

  return Math.min(...dynamicProgramming(root).slice(1));
}
