import { shuffle } from "./01470_shuffling_array";

it(`1470. Shuffle the Array
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].`, () => {
    expect(shuffle([1, 3, 5, 2, 4, 6], 3)).toEqual([1, 2, 3, 4, 5, 6]);
});
