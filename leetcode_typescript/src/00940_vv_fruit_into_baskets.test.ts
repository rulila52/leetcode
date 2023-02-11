import { totalFruit } from "./00940_vv_fruit_into_baskets";

// ✅✅ 904. Fruit Into Baskets (Accepted)
// 📅 07.02.23 (Daily Challenge)
// Given the integer array fruits, return the maximum number of fruits you can pick.
// fruits[i] is the type of fruit the ith tree produces.
// Some strict rules that you must follow:
// - You only have two baskets, and each basket can only hold a single type of fruit.
// - Starting from any tree, you must pick exactly one fruit from every tree while moving to the right.
// - Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// More: 🔗 https://leetcode.com/problems/fruit-into-baskets/
describe("Fruit Into Baskets", () => {
    it(`one tree test, should return 1 since there is only one tree`, () => {
        expect(totalFruit([0])).toEqual(1);
    });

    it(`should return 4 since we can collect from [{3, 3, 3, 1}, 4]`, () => {
        expect(totalFruit([3, 3, 3, 1, 4])).toEqual(4);
    });

    it(`should return 3 since we can collect from [0, {1, 2, 2}]`, () => {
        expect(totalFruit([0, 1, 2, 2])).toEqual(3);
    });

    it(`should return 5 since we can collect from [3, 3, 3, {1, 2, 1, 1, 2}, 3, 3, 4]`, () => {
        expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toEqual(5);
    });

    it(`should return 5 since we can collect from [1̶, 0, {1, 4, 1, 4, 1}, 2, 3], BUT NOT FROM FIRST TREE`, () => {
        expect(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3])).toEqual(5);
    });

    it(`should return 5 since we can collect from [0, 1, {6, 6, 4, 4, 6}]`, () => {
        expect(totalFruit([0, 1, 6, 6, 4, 4, 6])).toEqual(5);
    });
});
