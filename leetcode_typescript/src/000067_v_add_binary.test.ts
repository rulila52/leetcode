// ✅ 67. Add Binary (🥳) (Accepted - by myself)
// 📅 14.02.23 (Daily Challenge)
// Given two binary strings a and b, return their sum as a binary string.
// More: 🔗 https://leetcode.com/problems/add-binary/
import { addBinary } from "./000067_v_add_binary";

describe("Add Binary", () => {
    it(`should return sum as binary string`, () => {
        expect(addBinary("0", "0")).toEqual("0");
        expect(addBinary("1", "1")).toEqual("10");
        expect(addBinary("11", "1")).toEqual("100");
        expect(addBinary("1", "11")).toEqual("100");
        expect(addBinary("1010", "1011")).toEqual("10101");
        expect(addBinary("1010", "10101")).toEqual("11111");
        expect(addBinary("11010", "100")).toEqual("11110");
        expect(addBinary("1011", "10111101")).toEqual("11001000");
        expect(addBinary("1011", "11111101")).toEqual("100001000");
        expect(addBinary("1011101", "100")).toEqual("1100001");
    });

    it(`test with big string numbers, should be executed`, () => {
        let a = "1",
            b = "1";
        for (let i = 1; i < 10000; i++) {
            a += Math.floor(Math.random() * 2);
            b += Math.floor(Math.random() * 2);
        }

        addBinary(a, b);
    });
});
