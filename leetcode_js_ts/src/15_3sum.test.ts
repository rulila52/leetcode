// ✅✅ 15. 3Sum
// 📅 07.02.25
// More: 🔗 https://leetcode.com/problems/3sum/?envType=study-plan-v2&envId=top-interview-150

import { threeSum } from "./15_3sum";
import { numsArrayToString } from "./utils/nums-array-to-string";

describe("3sum", () => {
    it("should return the right answer", () => {
        expect(numsArrayToString(threeSum([-1, 0, 1, 2, -1, -4]))).toEqual(
            numsArrayToString([
                [-1, 0, 1],
                [-1, -1, 2],
            ]),
        );
    });
});
