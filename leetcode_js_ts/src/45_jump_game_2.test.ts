// ✅✅ 45. Jump Game II
// 📅 08.02.23 (Daily Challenge), 02.02.2025
// More: 🔗 https://leetcode.com/problems/jump-game-ii/

import { jump } from "./45_jump_game_2";

describe("Jump Game II", () => {
    it(`should return 1 since we can make only 1 jump`, () => {
        expect(jump([1, 1])).toEqual(1);
    });

    it(`should return 2 since jump 1 is step from index 0 to 1, then 3 steps to the last index`, () => {
        expect(jump([2, 3, 1, 1, 4])).toEqual(2);
    });

    it(`should return 3 since we need 3 jumps`, () => {
        expect(jump([2, 2, 2, 2, 2, 2, 2])).toEqual(3);
    });

    it(`should return 99 since we jump from index to index on 1 step`, () => {
        expect(jump(Array(100).fill(1))).toEqual(99);
    });

    it(`should return 1000`, () => {
        expect(jump(Array(10000).fill(1000))).toEqual(10);
    });
});
