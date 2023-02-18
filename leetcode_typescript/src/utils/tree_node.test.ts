import { createTree, TreeNode } from "./tree_node";

describe(`createTree must create a valid binary tree from given array, in which the nodes 
    are arranged in the array sequentially according to the levels of the tree `, () => {
    it(`should return the correct tree`, () => {
        expect(createTree([])).toEqual(null);
        expect(createTree([null])).toEqual(new TreeNode(0));
        expect(createTree([4, 3, 2])).toEqual(new TreeNode(4, new TreeNode(3), new TreeNode(2)));
    });

    it("null values should end branches", () => {
        expect(createTree([7, 5, null, 1, null, 4])).toEqual(
            new TreeNode(7, new TreeNode(5, new TreeNode(1, new TreeNode(4)), null), null),
        );
    });

    it("null value at the end should not be new node", () => {
        expect(createTree([10, 6, 9, null, null, 11, 7, null])).toEqual(
            new TreeNode(10, new TreeNode(6), new TreeNode(9, new TreeNode(11), new TreeNode(7))),
        );
    });
});
