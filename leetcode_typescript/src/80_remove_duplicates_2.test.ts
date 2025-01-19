// ✅✅ 80. Remove Duplicates from Sorted Array II
// 📅 20.01.25
// Given an integer array nums sorted in non-decreasing order,
// remove some duplicates in-place such that each unique element
// appears at most twice. The relative order of the elements
// should be kept the same.
// More: 🔗 https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

import { removeDuplicates } from "./80_remove_duplicates_2";

describe("Remove Duplicates from Sorted Array", () => {
    it(`should return the right answer`, () => {
        const arr = [1, 1, 1, 2, 2, 3];
        const k = removeDuplicates(arr);
        expect(JSON.stringify(arr.slice(0, k))).toEqual(JSON.stringify([1, 1, 2, 2, 3]));
    });
});
