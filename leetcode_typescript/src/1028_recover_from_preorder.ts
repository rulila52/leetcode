import {TreeNode} from "./utils/tree_node";

export function recoverFromPreorder(traversal: string): TreeNode | null {
    const stack: Array<TreeNode> = [];
    let i = 0;

    while (i < traversal.length) {
        let depth = 0;

        while (i < traversal.length && traversal[i] === '-') {
            depth++;
            i++;
        }

        let value = 0;

        while (i < traversal.length && !Number.isNaN(+traversal[i])) {
            value = value * 10 + (+traversal[i]);
            i++;
        }

        const node = new TreeNode(value);

        while (stack.length > depth) {
            stack.pop();
        }

        if (stack.length !== 0) {
            if (!stack.at(-1)?.left) {
                stack.at(-1)!.left = node;
            } else {
                stack.at(-1)!.right = node;
            }
        }

        stack.push(node);
    }

    return stack[0];
}