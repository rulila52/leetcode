// ❌ 35. Search Insert Position (Rejected - Wrong Answer)
// 📅 20.02.23 (Daily Challenge)
// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the
// index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// More: 🔗 https://leetcode.com/problems/search-insert-position/
import { searchInsert } from "./00035_v_search_insert";

describe("Search Insert Position", () => {
    it(`should return the index where the target is located or should be inserted`, () => {
        expect(searchInsert([1, 3, 5, 6], 1)).toEqual(0);
        expect(searchInsert([1, 3, 5, 6], 3)).toEqual(1);
        expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
        expect(searchInsert([1, 3, 5, 6], 6)).toEqual(3);

        expect(searchInsert([1, 3, 5, 6], -1)).toEqual(0);
        expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
        expect(searchInsert([1, 3, 5, 6], 4)).toEqual(2);
        expect(searchInsert([1, 3, 5, 7], 6)).toEqual(3);
        expect(searchInsert([1, 3, 5, 7], 8)).toEqual(4);

        expect(searchInsert([-2, 1, 3, 5, 6], -2)).toEqual(0);
        expect(searchInsert([-2, 1, 3, 5, 6], 1)).toEqual(1);
        expect(searchInsert([-2, 1, 3, 5, 6], 3)).toEqual(2);
        expect(searchInsert([-2, 1, 3, 5, 6], 5)).toEqual(3);
        expect(searchInsert([-2, 1, 3, 5, 6], 6)).toEqual(4);

        expect(searchInsert([-2, 1, 3, 5, 6], -3)).toEqual(0);
        expect(searchInsert([-2, 1, 3, 5, 6], -1)).toEqual(1);
        expect(searchInsert([-2, 1, 3, 5, 6], 2)).toEqual(2);
        expect(searchInsert([-2, 1, 3, 5, 6], 4)).toEqual(3);
        expect(searchInsert([-2, 1, 3, 5, 7], 6)).toEqual(4);
        expect(searchInsert([-2, 1, 3, 5, 7], 8)).toEqual(5);

        expect(searchInsert([1, 4, 6, 8, 11, 14], 1)).toEqual(0);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 4)).toEqual(1);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 6)).toEqual(2);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 8)).toEqual(3);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 11)).toEqual(4);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 14)).toEqual(5);

        expect(searchInsert([1, 4, 6, 8, 11, 14], 0)).toEqual(0);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 3)).toEqual(1);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 5)).toEqual(2);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 7)).toEqual(3);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 9)).toEqual(4);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 13)).toEqual(5);
        expect(searchInsert([1, 4, 6, 8, 11, 14], 16)).toEqual(6);

        expect(searchInsert([1], 1)).toEqual(0);
        expect(searchInsert([1], 0)).toEqual(0);
        expect(searchInsert([0], 1)).toEqual(1);
    });
});
