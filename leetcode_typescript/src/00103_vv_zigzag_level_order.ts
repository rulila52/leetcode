import { TreeNode } from "./utils/tree_node";

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    let result: number[][] = [],
        curQueue: TreeNode[] = [],
        nextQueue: TreeNode[] = [],
        i = 0;

    curQueue.push(root);
    result[i] = [];

    const unshiftNonNull = (array: TreeNode[], value: TreeNode | null) => {
        if (value) {
            array.unshift(value);
        }
    };

    while (curQueue.length) {
        const current = curQueue.shift()!;

        result[i].push(current.val);

        if (i & 1) {
            unshiftNonNull(nextQueue, current.right);
            unshiftNonNull(nextQueue, current.left);
        } else {
            unshiftNonNull(nextQueue, current.left);
            unshiftNonNull(nextQueue, current.right);
        }

        if (!curQueue.length && nextQueue.length) {
            curQueue = nextQueue;
            nextQueue = [];
            result[++i] = [];
        }
    }

    return result;
}
