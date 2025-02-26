export function maxProfit(prices: number[]): number {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
            continue;
        }
        profit = Math.max(profit, prices[i] - buyPrice);
    }
    return profit;
}
