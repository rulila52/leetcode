// ✅ 121. Best Time to Buy and Sell Stock II
// 📅 02.02.25
// More: 🔗 https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

import { maxProfit } from "./121_best_time_to_buy";

describe("Best Time to Buy and Sell Stock", () => {
    it("should return the right answer", () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });
});
