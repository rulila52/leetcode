// ❌❌❌ 2306. Naming a Company (Rejected - Time Limit Exceeded)
// 📅 09.02.23 (Daily Challenge)
// You are given an array of strings ideas that represents a list of names to be used
// in the process of naming a company. The process of naming a company is as follows:
// Choose 2 distinct names from ideas, call them ideaA and ideaB.
// Swap the first letters of ideaA and ideaB with each other.
// If both of the new names are not found in the original ideas, then the name ideaA ideaB
// (the concatenation of ideaA and ideaB, separated by a space) is a valid company name.
// Otherwise, it is not a valid name.
// Return the number of distinct valid names for the company.
// More: 🔗 https://leetcode.com/problems/naming-a-company/
import { distinctNames1, distinctNames2 } from "./02306_xxx_naming_a_company";

function makeString(): string {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    let counter = 0;
    let length = Math.floor(Math.random() * 10) + 1;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
describe("Naming a Company", () => {
    it(`should return 6 since we can make 6 new names - "doffee conuts", "conuts doffee",
    "tonuts dime", "tonuts doffee", "dime tonuts", "doffee tonuts"`, () => {
        expect(distinctNames1(["coffee", "donuts", "time", "toffee"])).toEqual(6);
        expect(distinctNames2(["coffee", "donuts", "time", "toffee"])).toEqual(6);
    });

    it(`should return 0 since we cannot make new names`, () => {
        expect(distinctNames1(["lack", "back"])).toEqual(0);
        expect(distinctNames2(["lack", "back"])).toEqual(0);
    });

    it(`should return 2 since we can make 2 new names - "abb daa", "daa abb"`, () => {
        expect(distinctNames1(["aaa", "baa", "caa", "bbb", "cbb", "dbb"])).toEqual(2);
        expect(distinctNames2(["aaa", "baa", "caa", "bbb", "cbb", "dbb"])).toEqual(2);
    });

    it(`should execute`, () => {
        let ideas = Array(1000);
        for (let i = 0; i < ideas.length; i++) {
            ideas[i] = makeString();
        }

        console.time("Check 1st method");
        distinctNames1(ideas);
        console.timeEnd("Check 1st method");

        console.time("Check 2nd method");
        distinctNames2(ideas);
        console.timeEnd("Check 2nd method");
    });
});
