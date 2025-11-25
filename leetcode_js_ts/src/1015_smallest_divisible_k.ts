// https://leetcode.com/problems/smallest-integer-divisible-by-k/description/
function smallestRepunitDivByK(k: number): number {
    let res = 0;
    let counter = 0;

    if (k % 2 === 0 || k % 5 === 0) {
        return -1;
    }

    while (true) {
        counter++;
        res = ((res * 10) + 1) % k;
        if (res === 0) {
            return counter;
        }
    }
}