// ✅ 88. Merge Sorted Array
// 📅 19.01.25
// You are given two integer arrays nums1 and nums2,
// sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// More: 🔗 https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

import { merge } from "./88_merge_sorted_array";

describe("Merge Sorted Array", () => {
    it("should return the right answer", () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        merge(nums1, 3, [2, 5, 6], 3);
        expect(JSON.stringify(nums1)).toEqual(JSON.stringify([1, 2, 2, 3, 5, 6]));
    });
});
