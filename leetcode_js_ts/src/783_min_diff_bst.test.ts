// ✅ 783. Minimum Distance Between BST Nodes (🥳) (Accepted - by myself)
// 📅 17.02.23 (Daily Challenge)
// Given the root of a Binary Search Tree (BST), return the minimum difference
// between the values of any two different nodes in the tree.
// More: 🔗 https://leetcode.com/problems/minimum-distance-between-bst-nodes/
import { maxDepth } from "./104_max_depth";
import { minDiffInBST } from "./783_min_diff_bst";
import { createTree } from "./utils/tree_node";

describe("Minimum Distance Between BST Nodes", () => {
    it(`should return the min diff equal to 1 (2-1)`, () => {
        expect(minDiffInBST(createTree([4, 2, 6, 1, 3]))).toEqual(1);
    });

    it(`should return the min diff equal to 1 (1-0)`, () => {
        expect(minDiffInBST(createTree([1, 0, 48, null, null, 12, 49]))).toEqual(1);
    });

    it(`should return the min diff equal to 2 (3-1), instead of two equal nodes`, () => {
        expect(minDiffInBST(createTree([3, 1, 14, null, 10, 3, 3]))).toEqual(2);
    });

    it(`test with big tree and nodes values, should be executed`, () => {
        let arr = [];

        for (let i = 1; i < 100; i++) {
            arr.push(Math.floor(Math.random() * 100000));
        }

        maxDepth(createTree(arr));
    });
});
