import { TreeNode } from "./utils/tree_node";

export function minDiffInBST(root: TreeNode | null): number {
    return minDiffWithArray(root!, []);
}

function minDiffWithArray(root: TreeNode, arr: number[]): number {
    let curMin = 0;

    for (let i = 0; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - root.val);
        if (!curMin || curMin > diff) {
            curMin = diff;
        }
    }

    arr.push(root.val);

    let minValues = [];

    if (curMin) {
        minValues.push(curMin);
    }
    if (root.left) {
        minValues.push(minDiffWithArray(root.left, arr));
    }
    if (root.right) {
        minValues.push(minDiffWithArray(root.right, arr));
    }

    return Math.min(...minValues);
}
