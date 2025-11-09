// ✅ 2703. Return Length of Arguments Passed
// 📅 19.01.25
// Write a function argumentsLength that returns
// the count of arguments passed to it.
// More: 🔗 https://leetcode.com/problems/return-length-of-arguments-passed/description/

import { argumentsLength } from "./2703_length_arguments";

describe("Return Length of Arguments Passed", () => {
    it("should return the right answer", () => {
        expect(argumentsLength(1, 2, 3)).toEqual(3);
    });
});
