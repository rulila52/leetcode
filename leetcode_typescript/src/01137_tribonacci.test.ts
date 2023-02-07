import tribonacci from "./01137_tribonacci";

it(`✅ 1137. N-th Tribonacci Number
The Tribonacci sequence Tn is defined as follows: 
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
Given n, return the value of Tn
More: https://leetcode.com/problems/n-th-tribonacci-number/`, () => {
    expect(tribonacci(0)).toEqual(0);
    expect(tribonacci(1)).toEqual(1);
    expect(tribonacci(2)).toEqual(1);
    expect(tribonacci(3)).toEqual(2);
    expect(tribonacci(4)).toEqual(4);
    expect(tribonacci(5)).toEqual(7);
});
