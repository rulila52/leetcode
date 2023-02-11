// ✅ 1137. N-th Tribonacci Number (💪) (Accepted)
// 📅 30.01.23 (Daily Challenge)
// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn
// More: 🔗 https://leetcode.com/problems/n-th-tribonacci-number/
import tribonacci from "./01137_v_tribonacci";

describe("N-th Tribonacci Number", () => {
    it(`0-7 test, should return T0 = 0, T1 = 1, T2 = 1, 
    T3 = 0 + 1 + 1 = 2, T4 = 1 + 1 + 2 = 4, T5 = 1 + 2 + 4 = 7`, () => {
        expect(tribonacci(0)).toEqual(0);
        expect(tribonacci(1)).toEqual(1);
        expect(tribonacci(2)).toEqual(1);
        expect(tribonacci(3)).toEqual(2);
        expect(tribonacci(4)).toEqual(4);
        expect(tribonacci(5)).toEqual(7);
    });

    it(`Test on big data, must be executed within the normal time and return T37 = 2082876103`, async () => {
        expect(tribonacci(37)).toEqual(2082876103);
    });
});
