// ✅ 989. Add to Array-Form of Integer (🥳) (Accepted - by myself)
// 📅 15.02.23 (Daily Challenge)
// The array-form of an integer num is an array representing its digits in left to right order.
// Given num, the array-form of an integer, and an integer k,
// return the array-form of the integer num + k.
// More: 🔗 https://leetcode.com/problems/add-to-array-form-of-integer/
import { addToArrayForm } from "./00989_x_add_to_array_form";

describe("Add to Array-Form of Integer", () => {
    it(`should return the array-form of the integer num + k`, () => {
        expect(addToArrayForm([2, 7, 4], 181)).toEqual([4, 5, 5]);
        expect(addToArrayForm([2, 1, 5], 806)).toEqual([1, 0, 2, 1]);
        expect(addToArrayForm([2, 1, 5, 2], 8)).toEqual([2, 1, 6, 0]);
        expect(addToArrayForm([5], 110)).toEqual([1, 1, 5]);
        expect(addToArrayForm([0], 110)).toEqual([1, 1, 0]);
        expect(addToArrayForm([2, 1, 0], 0)).toEqual([2, 1, 0]);
        expect(addToArrayForm([0], 0)).toEqual([0]);
    });

    it(`test with big numbers, should be executed`, () => {
        let a = [Math.floor(Math.random() * 9) + 1];
        for (let i = 1; i < 10000; i++) {
            a.push(Math.floor(Math.random() * 10));
        }

        addToArrayForm(a, 9999);
    });
});
