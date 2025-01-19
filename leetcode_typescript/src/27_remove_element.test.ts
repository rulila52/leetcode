// ✅ 27. Remove Element
// 📅 20.01.25
// Given an integer array nums and an integer val,
// remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return
// the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal
// to val be k, to get accepted, you need to do the following things:
// - Change the array nums such that the first k elements of nums
// contain the elements which are not equal to val. The remaining
// elements of nums are not important as well as the size of nums.
// - Return k.
// More: 🔗 https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

import { removeElement } from "./27_remove_element";

describe("Remove Element", () => {
    it(`should return the right answer`, () => {
        const arr = [0, 1, 2, 3, 4];
        const k = removeElement(arr, 2);
        expect(JSON.stringify(arr.slice(0, k))).toEqual(JSON.stringify([0, 1, 3, 4]));
    });
});
