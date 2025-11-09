// ✅ 1512. Number of Good Pairs (🥳) (Accepted - by myself)
// 📅 03.10.23 (Daily Challenge)
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
// More: 🔗 https://leetcode.com/problems/number-of-good-pairs
import { numIdenticalPairs } from "./1512_number_good_pairs";

describe("Number of Good Pairs", () => {
    it(`should return the count of good pairs`, () => {
        expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toEqual(4);
        expect(numIdenticalPairs([1, 1, 1, 1])).toEqual(6);
    });
});
