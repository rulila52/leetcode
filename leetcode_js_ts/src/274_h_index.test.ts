// ✅✅ 274. H-Index
// 📅 04.02.25
// More: 🔗 https://leetcode.com/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150

import { hIndex } from "./274_h_index";

describe("H-Index", () => {
    it("should return the right answer", () => {
        expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
    });
});
