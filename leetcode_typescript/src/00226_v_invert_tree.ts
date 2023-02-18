import { TreeNode } from "./utils/tree_node";

export function invertTree(root: TreeNode | null): TreeNode | null {
    if (root) {
        [root!.right, root!.left] = [root!.left, root!.right];
        invertTree(root!.left);
        invertTree(root!.right);
    }
    return root;
}
