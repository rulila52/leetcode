// ✅ 1523. Count Odd Numbers in an Interval Range (🥳) (Accepted - by myself)
// 📅 13.02.23 (Daily Challenge)
// Given two non-negative integers low and high.
// Return the count of odd numbers between low and high (inclusive).
// More: 🔗 https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
import { countOdds } from "./01523_v_count_odds";

describe("Count Odd Numbers in an Interval Range", () => {
    it(`should return the count of odd numbers between two numbers (inclusive)`, () => {
        expect(countOdds(3, 7)).toEqual(3);
        expect(countOdds(3, 9)).toEqual(4);
        expect(countOdds(4, 7)).toEqual(2);
        expect(countOdds(3, 6)).toEqual(2);
        expect(countOdds(4, 6)).toEqual(1);
        expect(countOdds(5, 5)).toEqual(1);
        expect(countOdds(6, 6)).toEqual(0);
    });

    it(`test with big high number, should be executed and return 500000000`, () => {
        expect(countOdds(0, 1000000000)).toEqual(500000000);
    });
});
