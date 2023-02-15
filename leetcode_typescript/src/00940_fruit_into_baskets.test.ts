import { totalFruit } from "./00940_fruit_into_baskets";

it(`✅✅ 904. Fruit Into Baskets
Given the integer array fruits, return the maximum number of fruits you can pick. 
fruits[i] is the type of fruit the ith tree produces.
Some strict rules that you must follow:
- You only have two baskets, and each basket can only hold a single type of fruit.
- Starting from any tree, you must pick exactly one fruit from every tree while moving to the right.
- Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
More: https://leetcode.com/problems/fruit-into-baskets/`, () => {
    expect(totalFruit([0])).toEqual(1);
    expect(totalFruit([0, 1, 2, 2])).toEqual(3);
    expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toEqual(5);
    expect(totalFruit([3, 3, 3, 1, 4])).toEqual(4);
    expect(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3])).toEqual(5);
    expect(totalFruit([0, 1, 6, 6, 4, 4, 6])).toEqual(5);
});
