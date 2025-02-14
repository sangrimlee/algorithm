export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function createTree(arr: (number | null)[]) {
  const n = arr.length;
  if (n === 0 || typeof arr[0] !== 'number') {
    return null;
  }

  const rootNode = new TreeNode(arr[0]);
  const queue = [rootNode];
  for (let i = 1; i < n; i += 2) {
    const parentNode = queue.shift();
    if (parentNode === undefined) break;
    const [leftValue, rightValue] = [arr[i], arr[i + 1]];
    if (typeof leftValue === 'number') {
      const leftNode = new TreeNode(leftValue);
      parentNode.left = leftNode;
      queue.push(leftNode);
    }

    if (typeof rightValue === 'number') {
      const rightNode = new TreeNode(rightValue);
      parentNode.right = rightNode;
      queue.push(rightNode);
    }
  }
  return rootNode;
}

export function compareTree(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (node1 === null && node2 === null) {
    return true;
  }
  if (node1 === null || node2 === null) {
    return false;
  }
  return (
    node1.val === node2.val &&
    compareTree(node1.left, node2.left) &&
    compareTree(node1.right, node2.right)
  );
}

export class NArrayTreeNode {
  val: number;
  children: NArrayTreeNode[];
  constructor(val = 0) {
    this.val = val;
    this.children = [];
  }
}

export function createNArrayTree(
  tree: Record<number, number[] | undefined>,
): NArrayTreeNode | null {
  if (!tree[1]) {
    return null;
  }
  const rootNode = new NArrayTreeNode(1);
  rootNode.children = tree[1].map((value) => new NArrayTreeNode(value));

  const currentNodes = [rootNode];
  while (0 < currentNodes.length) {
    const currentNode = currentNodes.shift();
    if (currentNode) {
      const children = tree[currentNode.val]?.map((value) => new NArrayTreeNode(value)) ?? [];
      currentNode.children = children;
      currentNodes.push(...children);
    }
  }

  return rootNode;
}
