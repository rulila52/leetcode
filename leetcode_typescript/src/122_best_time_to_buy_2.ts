export function maxProfit(prices: number[]): number {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
            continue;
        }
        if (i === prices.length - 1 || (prices[i + 1] < prices[i] && prices[i] - buyPrice)) {
            profit += prices[i] - buyPrice;
            buyPrice = prices[i];
        }
    }

    return profit;
}
