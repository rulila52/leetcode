// ✅ 26. Remove Duplicates from Sorted Array
// 📅 20.01.25
// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element
// appears only once. The relative order of the elements should be
// kept the same. Then return the number of unique elements in nums.
// More: 🔗 https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

import { removeDuplicates } from "./26_remove_duplicates";

describe("Remove Duplicates from Sorted Array", () => {
    it("should return the right answer", () => {
        const arr = [1, 1, 2, 2, 3, 3];
        const k = removeDuplicates(arr);
        expect(JSON.stringify(arr.slice(0, k))).toEqual(JSON.stringify([1, 2, 3]));
    });
});
