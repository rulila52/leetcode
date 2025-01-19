// ✅ 226. Invert Binary Tree (🥳) (Accepted - by myself)
// 📅 18.02.23 (Daily Challenge)
// Given the root of a binary tree, invert the tree, and return its root.
// More: 🔗 https://leetcode.com/problems/invert-binary-tree/
import { invertTree } from "./226_invert_tree";
import { createTree } from "./utils/tree_node";

describe("Invert Binary Tree", () => {
    it(`should invert tree`, () => {
        expect(invertTree(createTree([]))).toEqual(createTree([]));
        expect(invertTree(createTree([4, 2, 7, 1, 3, 6, 9]))).toEqual(
            createTree([4, 7, 2, 9, 6, 3, 1]),
        );
        expect(invertTree(createTree([5, 7, 1, null, 8, 7, 5]))).toEqual(
            createTree([5, 1, 7, 5, 7, 8, null]),
        );
    });

    it(`test with big tree and different nodes values, should be executed`, () => {
        let arr = [];

        for (let i = 1; i < 100; i++) {
            arr.push(Math.floor(Math.random() * 100 * Math.pow(-1, i)));
        }

        invertTree(createTree(arr));
    });
});
