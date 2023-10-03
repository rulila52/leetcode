export function countOdds(low: number, high: number): number {
    if (low % 2 == 0 && high % 2 == 0) {
        return (high - low) / 2;
    } else {
        return Math.floor((high - low + 2) / 2);
    }
}
