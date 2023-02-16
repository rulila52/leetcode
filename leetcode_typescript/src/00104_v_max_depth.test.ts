// ✅ 104. Maximum Depth of Binary Tree (🥳) (Accepted - by myself)
// 📅 16.02.23 (Daily Challenge)
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.
// More: 🔗 https://leetcode.com/problems/maximum-depth-of-binary-tree/
import { maxDepth, TreeNode } from "./00104_v_max_depth";

describe("Maximum Depth of Binary Tree", () => {
    function createTree(arr: (number | null)[]) {
        if (!arr.length) return null;

        const queue: TreeNode[] = [];
        const tree: TreeNode = new TreeNode(arr.shift() || undefined);
        queue.push(tree);

        while (queue.length) {
            const current = queue.shift()!;
            if (arr.length) {
                current.left = new TreeNode(arr.shift() || undefined);
                queue.push(current.left);
            }
            if (arr.length) {
                current.right = new TreeNode(arr.shift() || undefined);
                queue.push(current.right);
            }
        }
        return tree;
    }

    it(`should return the depth of tree equal to 0`, () => {
        expect(maxDepth(createTree([]))).toEqual(0);
    });

    it(`should return the depth of tree equal to 1`, () => {
        expect(maxDepth(createTree([null]))).toEqual(1);
    });

    it(`should return the depth of tree equal to 3:
    3
    9      20
    -  -   15   7`, () => {
        const arr = [15, 9, 20, null, null, 15, 7];
        const tree = createTree(arr);
        expect(maxDepth(tree)).toEqual(3);
    });

    it(`should return the depth of tree equal to 4:
    11
    10               -
    9      7      -       -
    15  -   -   -   -   -   -   -`, () => {
        const arr = [11, 10, null, 9, 7, null, null, 15];
        const tree = createTree(arr);
        expect(maxDepth(tree)).toEqual(4);
    });

    it(`test with big tree, should be executed and return `, () => {
        let arr = [],
            length = 10000,
            lastPow = 0,
            last2inPow = 0;

        for (let i = 1; i < length; i++) {
            arr.push(Math.floor(Math.random() * 30));
            const check = Math.pow(2, lastPow);
            if (check === i - last2inPow || i == length - 1) {
                last2inPow = check;
                lastPow++;
            }
        }

        const tree = createTree(arr);
        expect(maxDepth(tree)).toEqual(lastPow);
    });
});
