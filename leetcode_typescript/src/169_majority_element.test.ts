// ✅ 169. Majority Element
// 📅 29.01.25
// More: 🔗 https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150

import { majorityElement } from "./169_majority_element";

describe("Majority Element", () => {
    it(`should return the right answer`, () => {
        expect(majorityElement([3, 2, 3])).toEqual(3);
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
    });
});
