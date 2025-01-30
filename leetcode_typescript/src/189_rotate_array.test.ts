// ✅ 189. Rotate Array
// 📅 31.01.25
// More: 🔗 https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

import { majorityElement } from "./169_majority_element";
import { rotate } from "./189_rotate_array";

describe("Rotate Array", () => {
    it(`should return the right answer`, () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        rotate(nums, 3);
        expect(JSON.stringify(nums)).toEqual(JSON.stringify([5, 6, 7, 1, 2, 3, 4]));
    });
});
