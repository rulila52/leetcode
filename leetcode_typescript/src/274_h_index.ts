export function hIndex(citations: number[]): number {
    const sorted = citations.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {
        if (citations[i] >= sorted.length - i) {
            return sorted.length - i;
        }
    }

    return 0;
}
