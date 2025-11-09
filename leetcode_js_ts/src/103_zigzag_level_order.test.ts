// ✅✅ 103. Binary Tree Zigzag Level Order Traversal (🥳) (Accepted - by myself)
// 📅 19.02.23 (Daily Challenge)
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// (i.e., from left to right, then right to left for the next level and alternate between).
// More: 🔗 https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
import { zigzagLevelOrder } from "./103_zigzag_level_order";
import { createTree } from "./utils/tree_node";

describe("Binary Tree Zigzag Level Order Traversal", () => {
    it(`should return [[3],[20,9],[15,7]]`, () => {
        expect(zigzagLevelOrder(createTree([3, 9, 20, null, null, 15, 7]))).toEqual([
            [3],
            [20, 9],
            [15, 7],
        ]);
    });

    it(`should return [[1],[3,2],[4,5]]`, () => {
        expect(zigzagLevelOrder(createTree([1, 2, 3, 4, null, null, 5]))).toEqual([
            [1],
            [3, 2],
            [4, 5],
        ]);
    });

    it(`should return [[1]]`, () => {
        expect(zigzagLevelOrder(createTree([1]))).toEqual([[1]]);
    });

    it(`should return []`, () => {
        expect(zigzagLevelOrder(createTree([]))).toEqual([]);
    });

    it(`test with big tree and different nodes values, should be executed`, () => {
        let arr = [];

        for (let i = 1; i < 2000; i++) {
            arr.push(Math.floor(Math.random() * 100 * Math.pow(-1, i)));
        }

        zigzagLevelOrder(createTree(arr));
    });
});
