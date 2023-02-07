import { shuffle1, shuffle2 } from "./01470_shuffling_array";

it(`1470. Shuffle the Array
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].
More: https://leetcode.com/problems/shuffle-the-array/`, () => {
    expect(shuffle1([1, 3, 5, 2, 4, 6], 3)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(shuffle2([1, 3, 5, 2, 4, 6], 3)).toEqual([1, 2, 3, 4, 5, 6]);

    const n = 100000;
    const arr = Array(n).fill(1);

    console.time("Time of 1nd method");
    shuffle1(arr, n);
    console.timeEnd("Time of 1nd method");

    console.time("Time of 2nd method");
    shuffle2(arr, n);
    console.timeEnd("Time of 2nd method");
});
