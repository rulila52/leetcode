// ✅✅✅ 1028. Recover a Tree From Preorder Traversal
// 📅 23.02.25
// More: 🔗 https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/description/

import {recoverFromPreorder} from "./1028_recover_from_preorder";

describe("Recover a Tree From Preorder Traversal", () => {
    it("should return the right answer", () => {
        const root = recoverFromPreorder("1-2--3--4-5--6--7")
        expect(root?.val).toBe(1);
        expect(root?.left?.val).toBe(2);
        expect(root?.left?.left?.val).toBe(3);
        expect(root?.left?.right?.val).toBe(4);
        expect(root?.right?.val).toBe(5);
        expect(root?.right?.left?.val).toBe(6);
        expect(root?.right?.right?.val).toBe(7);
    });
});
