export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function createTree(arr: (number | null)[]): TreeNode | null {
    if (!arr.length) return null;

    const queue: TreeNode[] = [];
    const tree: TreeNode = new TreeNode(arr.shift() || undefined);
    queue.push(tree);

    while (queue.length) {
        const current = queue.shift()!;
        if (arr.length) {
            let leftVal = arr.shift();
            if (leftVal != null) {
                current.left = new TreeNode(leftVal);
                queue.push(current.left);
            }
        }
        if (arr.length) {
            let rightVal = arr.shift();
            if (rightVal != null) {
                current.right = new TreeNode(rightVal);
                queue.push(current.right);
            }
        }
    }
    return tree;
}
