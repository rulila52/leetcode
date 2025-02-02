// ✅✅ 55. Jump Game
// 📅 02.02.23
// More: 🔗 https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

import { canJump } from "./55_jump_game";

describe("Jump Game", () => {
    it("should return the right answer", () => {
        expect(canJump([2, 3, 1, 1, 4])).toBeTruthy();
        expect(canJump([3, 2, 1, 0, 4])).toBeFalsy();
    });
});
