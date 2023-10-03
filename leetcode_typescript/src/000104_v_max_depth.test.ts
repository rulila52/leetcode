// ✅ 104. Maximum Depth of Binary Tree (🥳) (Accepted - by myself)
// 📅 16.02.23 (Daily Challenge)
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.
// More: 🔗 https://leetcode.com/problems/maximum-depth-of-binary-tree/
import { maxDepth } from "./000104_v_max_depth";
import { createTree } from "./utils/tree_node";

describe("Maximum Depth of Binary Tree", () => {
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

    it(`should return the depth of tree equal to 3 
    (null node at the end of test must not be a new level):
    10
    6      9
    -  -   11   7`, () => {
        const arr = [10, 6, 9, null, null, 11, 7, null];
        const tree = createTree(arr);
        expect(maxDepth(tree)).toEqual(3);
    });

    it(`test with big tree, should be executed and return the right depth of tree`, () => {
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

        expect(maxDepth(createTree(arr))).toEqual(lastPow);
    });
});
